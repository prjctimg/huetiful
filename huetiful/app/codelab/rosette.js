/**
 * Rounds a number
 * @param n Number to round.
 * @param places Number of places to round to.
 * @returns {number}
 */
const round = (n, places) => Math.round(n * (10 ** places)) / (10 ** places)


/**
 * Random number between min and max
 * @param min Lower end of range.
 * @param  max Upper end of range.
 * @param precision Number of decimal places.
 * @returns {*}
 */
const rand = (min, max, precision = 0) => {
    return round((Math.random() * (max - min) + min), precision)
}

/**
 * Represents a color
 */
class Color {
    /**
     * Constructor
     * @param h Hue
     * @param s Saturation
     * @param l``Lightness
     */
    constructor(h, s, l) {
        this.h = h
        this.s = s
        this.l = l
    }
    /**
     * Creates a random color.
     * @returns {Color}
     */
    static createRandom() {
        return new Color(rand(0, 360), rand(25 - 75), rand(25, 75))
    }


    getNextColor(hueStepSize) {
        let nextHue = this.h + hueStepSize

        //Wrap around if hue is out of range
        if (nextHue < 0) {
            nextHue += 360
        } else if (nextHue > 360) {
            nextHue -= 360
        }
        return new Color(nextHue, rand(25, 75), rand(25, 75)
        )
    }
    toString() {
        return `hsl(${this.h},${this.s}%,${this.l}%)`
    }
}
/**Create a palette of a given size.
 * @param numberOfColors  Number of colors.
 * @param hueStepSize By how much the hue should change.
 * @returns {*[]}
 */
const randomPalette = (numberOfColors, hueStepSize) => {
    const colors = []
    let currentColor = Color.createRandom()
    colors.push(currentColor)

    while (numberOfColors > 0) {
        currentColor = currentColor.getNextColor(hueStepSize)
        colors.push(currentColor)
        numberOfColors--
    }
    return colors
}

/**Represents a circle within
 * @param cx 
 * @param cy
 * @param r
 * @param color
 */
class Circle {
    constructor(cx, cy, r, color) {
        this.cx = cx
        this.cy = cy
        this.r = r
        this.color = color
    }

    /** Get a string represantation of this circle
     * @returns {string}
     */
    toString() {
        return `<circle 
        cx='${this.cx}'
        cy = '${this.cy}'
        r = '${this.r}'
        fill = '${this.color.toString()}'
        stroke = '#000'
        stroke-width = '2'/>`
    }
}

/**
 * Represents a single Segment.
 * @param width Width of the segment.
 * @param height Height of the segment.
 * @param numberOfCircles Number of  circles it should contain
 * @param colorPalette  The color palette used.
 */
class Segment {
    constructor(width, height, numberOfCircles, colorPalette) {
        this.width = width
        this.height = height
        this.circles = []
        this.generateCircles(numberOfCircles, colorPalette)
    }

    /**
     * Generates a given number of random circles with different colors from supplied palette.
     * @param numberOfCircles Number of circles to generate.
     * @param colorPalette Palette to chose color from.
     */
    generateCircles(numberOfCircles, colorPalette) {

        while (numberOfCircles > 0) {
            //5% to 25% of the segment's width.
            const radius = rand(this.width * 0.05, this.width * 0.25)
            this.circles.push(new Circle(
                //Width - radius ensures the circles dont overlap the width.
                rand(0, this.width - radius), rand(0, this.height),
                radius,
                colorPalette[rand(0, colorPalette.length - 1)]
            ))
            numberOfCircles--
        }
    }

    /**
     * Creates a string representation of this segment.
     * @param id DOM id for referencing.
     * @returns {string}
     */
    toString(id) {
        //This is used to scale the clippath without using transform:scale.
        //When finished they'll be some artifacts. This reduces them.
        const tolerance = 1

        return `<svg width='${this.width + tolerance}' height='${this.height + tolerance}' id='${id}'>
<defs>
<clipPath id='triangle'>
<polygon transform='scaleZ(1)' points='
-${tolerance / 2},${this.height / 2},${this.width + (tolerance / 2)},-${tolerance / 2},${this.width + (tolerance / 2)},${this.height + (tolerance / 2)}'/>
</clipPath>
</defs>
<g style='clip-path: url(#triangle)'>
${this.circles.map(c => c.toString()).join('\n')}
</g>
</svg>
`
    }
}

/**
 * Creates a full pattern
 * @param number of segments.
 * @param radius
 */
class Pattern {
    constructor(numberOfSegments, radius) {
        this.numberOfSegments = numberOfSegments
        const angle = 360 / numberOfSegments


        const segmentHeight = 2 * Math.sin((angle * Math.PI / 180.0) / 2) * radius
        const segmentWidth = Math.sqrt(radius ** 2 - (segmentHeight / 2) ** 2)
        const colorPalette = randomPalette(5, 25)


        this.segment = new Segment(segmentWidth, segmentHeight, rand(5, 12, colorPalette))
        this.segmentHeight = this.segment.height
        this.width = 2 * Math.sqrt((this.segment.height / 2) ** 2 + radius ** 2)
        this.height = this.width
    }
    toString() {
        const segments = []
        let numberOfSegmentsLeft = this.numberOfSegments

        while (numberOfSegmentsLeft > 0) {
            const rotationRadius = (360 / this.numberOfSegments * numberOfSegmentsLeft) % 360
            let transformRotation = `rotate(${rotationRadius})`



            segments.push(`<use href='#segment'>
            transform='${transformRotation}'
            translate(${this.width / 2} ${this.width / 2 - this.segmentHeight / 2})
            </use>`)

            numberOfSegmentsLeft--
        }
        return `
        <div>
        ${this.segment.toString('segment')}
        </div>
        
        <div>
        <svg width='${this.width}' height='${this.height}'>
        ${segments.join('\n')}
        </svg>
        </div>
        `

    }


}


const segment = new Segment(windowWidth, windowHeight, 14, randomPalette(5, 25))

const container = document.createElement('div')
container.innerHTML = segment.toString('segment')

document.body.appendChild(container)


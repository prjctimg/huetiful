import { SVG } from '@svgdotjs/svg.js';
import { spline } from '@georgedoescode/generative-utils/dist/esm/index';

class BlobCharacter {

    constructor(width, height, target) {
        this.width = width;
        this.height = height;
        this.size = random(100, 200);
        this.x = this.width / 2;
        this.y = this.height / 2;

        this.svg = SVG().addTo(target).viewbox(0, 0, this.width, this.height)


    }

    drawBody() {
        const numPoints = random(3, 12);

        const angleStep = (Math.PI * 2) / numPoints;
        const points = [];

        for (let i = 1; i <= numPoints; i++) {

            const pull = random(0.75, 1, true);

            const x = this.x + Math.cos(i * angleStep) * (this.size * pull);
            const y = this.y + Math.sin(i * angleStep) * (this.size * pull);

            points.push({ x, y });
        }
        const pathData = spline(points, 1, true);

        this.svg
            .path(pathData).stroke({ width: 1, color: '#000' }).fill('transparent')
    }

    drawEye(x, y, size) {

        const eye = this.svg.group();

        eye.transform({ translateX: x, translateY: y });

        eye.circle(size)
            .cx(0)
            .cy(0)
            .stroke({ width: 2, color: '#000' })
    }


    drawEyes() {
        const maxWidth = this.size / 2;
        const isCyclops = random(0, 1, true) > 0.75;
        const eyeSize = random(maxWidth / 2, maxWidth);

        if (isCyclops) {
            this.drawEye(this.x, this.y, eyeSize);
        } else {
            this.drawEye(this.x - maxWidth / 2, this.y, eyeSize)
            this.drawEye(this.x + maxWidth / 2, this.y, eyeSize);
        }
    }
}



/**  Utility function to calculate random character size within a range (respective to viewport)
 * @param min lower range
 * @param max Upper range
 * @returns number
 * 
 */

function random(min, max, float = false) {
    const val = Math.random() * (max - min)

    if (float) {
        return val;
    }
    return Math.floor(val)

}

//To draw the character: 
/* 
Plot equidistant points around the circumference of a circle.
Add a little randomness to the {x,y} values of each point.
Draw a smooth curve through all the points.


*/

const character = new BlobCharacter(600, 400, document.body);
character.drawBody()
character.drawEyes()
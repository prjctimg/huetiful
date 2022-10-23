import chroma from 'chroma-js'

const scale = ([...c]) => {
    return (num) => {
        return chroma.bezier([...c])
            .scale()
            .colors(num)
    }
}

const get = (color) => {
    return (channel) => {
        return chroma(color)
            .get(channel)
    }
}

const set = (color) => {
    return (channel) => {
        return (value) => {
            return chroma(color)
                .set(channel, value)
        }
    }
}

const hex = (color) => {
    return chroma(color)
        .hex()
}

const brighten = (color) => {
    return (value = 1) => {
        return chroma(color)
            .brighten(value)
    }
}

console.log(hex('pink'))



const setStyle = (prop) => {
    return (value) => {
        return document
            .body
            .style
            .setProperty(prop, value)
    }
}

import chroma from 'chroma-js'

const scale = ([...c]) => num => chroma
    .bezier([...c])
    .scale()
    .colors(num)


/**
 * Gets the specifified channel on the color. Can be used to perform checks on channel values before applying color corrections
 * @param color Any recognizable color token
 * @param channel The channel to be retrieved */
const getChannel = color =>
    channel =>
        chroma(color)
            .get(channel)





const set = color =>
    channel =>
        value =>
            chroma(color)
                .set(channel, value)




const hex = color =>
    chroma(color)
        .hex()


const brighten = color =>
    (value = 1) =>
        chroma(color)
            .brighten(value)



console.log(hex('pink'))



const setStyle = (prop) => {
    return (value) => {
        return document
            .body
            .style
            .setProperty(prop, value)
    }
}

import chroma from '../../libs/chroma'

export const scale = ([...c]) => num => chroma
    .bezier([...c])
    .scale()
    .colors(num)


/**
 * Gets the specifified channel on the color. Can be used to perform checks on channel values before applying color corrections
 * @param color Any recognizable color token
 * @param channel The channel to be retrieved */
export const getChannel = color =>
    channel =>
        chroma(color)
            .get(channel)





export const set = color =>
    channel =>
        value =>
            chroma(color)
                .set(channel, value)




export const hex = color =>
    chroma(color)
        .hex()


export const brighten = color =>
    (value = 1) =>
        chroma(color)
            .brighten(value)



console.log(hex('pink'))



export const setStyle = (prop) => {
    return (value) => {
        return document
            .body
            .style
            .setProperty(prop, value)
    }
}


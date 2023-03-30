import chroma from '../../libs/chroma'

e
/**
 * Gets the specifified channel on the color. Can be used to perform checks on channel values before applying color corrections
 * @param color Any recognizable color token
 * @param channel The channel to be retrieved */
export var getChannel = color =>
    modeChannel =>
        chroma(color)
            .get(modeChannel)





export var setChannel = color =>
    modeChannel =>
        value =>
            chroma(color)
                .set(modeChannel, value)






export var brighten = color =>
    (value = 1) =>
        chroma(color)
            .brighten(value)






export var setStyle = (prop) => {
    return (value) => {
        return document
            .body
            .style
            .setProperty(prop, value)
    }
}




//Small helper function to correct hue values and clamp them to the 360 degrees limit


export default function adjustHue(value = 0) {
    if (value < 0)
        value += Math.ceil(-value / 360) * 360;

    return value % 360;
}


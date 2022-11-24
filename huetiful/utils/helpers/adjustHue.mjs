
export function adjustHue(value = 0) {
    if (value < 0)
        value += Math.ceil(-value / 360) * 360;

    return value % 360;
}

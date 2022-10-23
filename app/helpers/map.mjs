// Hue Shift. As the colour becomes lighter the hue shifts up, as it becomes darker it shifts down















export function map(n) {
    return start1 => end1 => start2 => end2 => {
        return ((n - start1) / (end1 - start1)) * (end2 - start2) + start2;
    };
}

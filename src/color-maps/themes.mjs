const themeMap = new Map()

const themes = {
    Earthtones: {
        primary: {
            light: '',
            secondary: ''
        },
        secondary: {
            light: '',
            secondary: ''
        },
        hueshifted: { // Find a way of mixing the light and dark variants to produce a single baseColor for hueshifting
            // An  array of hue shifted palettes per key
            primary: [],
            secondary: []
        },
        tonal: {
            // An  array of tonal palettes as per MDG 
            primary: [],
            secondary: []
        }
    }
}


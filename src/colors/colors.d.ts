


hueRange(mode: keyof HueColorSpaces): [number, number] {}


    hueRangeMap?: { [Property in keyof HueColorSpaces]: HueColorSpaces[Property] };
    temperature?: number;
    gradients: Array<{ name:string colors: Arraystring| object | number> }>;



/**
 * Any color value as recognized by the Chroma() constructor.
 * @param
 * @see chromajswebsitehere
 */
export type baseColor = number | string | object | [number, number, number, keyof HueColorSpaces];

/**
 * @param
 * An array of baseColor tokens (in short, just an array of valid colors)
 */
export type Colors = Array<baseColor>;

/**
 * @param
 * The upper and lower bound of a property.Usually clamped to [0,1]
 */

export type Range = [number, number];





 type HueColorSpaces = {
    hsl?: [number, number];
    hsv?: [number, number];
    hsi?: [number, number];

    lch?: [number, number];
    oklch?: [number, number];
    hcl?: [number, number];
};

type ScaleValues = {
    '100':string
    '50':string
    '200':string
    '300':string
    '400':string
    '500':string
    '600':string
    '700':string
    '800':string
    '900':string
};

// The users dont interact directly with the Color instance rather it is wrapped in a function and acts as an entry wrapper to the underlying class meta.

type HueMap ={ 
    indigo: {
      '50': string,
      '100': string,
      '200': string,
      '300': string,
      '400': string,
      '500': string,
      '600': string,
      '700': string,
      '800': string,
      '900': string
    },
    gray: {
      '50': string,
      '100': string,
      '200': string,
      '300': string,
      '400': string,
      '500': string,
      '600': string,
      '700': string,
      '800': string,
      '900': string
    }
  ;
  
    zinc: {
      '50': string,
      '100': string,
      '200': string,
      '300': string,
      '400': string,
      '500': string,
      '600': string,
      '700': string,
      '800': string,
      '900': string
    }
  ;
  
    neutral: {
      '50': string,
      '100': string,
      '200': string,
      '300': string,
      '400': string,
      '500': string,
      '600': string,
      '700': string,
      '800': string,
      '900': string
    }
  ;
  
    stone: {
      '50': string,
      '100': string,
      '200': string,
      '300': string,
      '400': string,
      '500': string,
      '600': string,
      '700': string,
      '800': string,
      '900': string
    
  };
  
    red: {
      '50': string,
      '100': string,
      '200': string,
      '300': string,
      '400': string,
      '500': string,
      '600': string,
      '700': string,
      '800': string,
      '900': string
    
  };
  
    orange: {
      '50': string,
      '100': string,
      '200': string,
      '300': string,
      '400': string,
      '500': string,
      '600': string,
      '700': string,
      '800': string,
      '900': string
    
  };
  
    amber: {
      '50': string,
      '100': string,
      '200': string,
      '300': string,
      '400': string,
      '500': string,
      '600': string,
      '700': string,
      '800': string,
      '900': string
    
  };
  
    yellow: {
      '50': string,
      '100': string,
      '200': string,
      '300': string,
      '400': string,
      '500': string,
      '600': string,
      '700': string,
      '800': string,
      '900': string
    
  };
  
    lime: {
      '50': string,
      '100': string,
      '200': string,
      '300': string,
      '400': string,
      '500': string,
      '600': string,
      '700': string,
      '800': string,
      '900': string
    
  };
  
    green: {
      '50': string,
      '100': string,
      '200': string,
      '300': string,
      '400': string,
      '500': string,
      '600': string,
      '700': string,
      '800': string,
      '900': string
    
  };
  
    emerald: {
      '50': string,
      '100': string,
      '200': string,
      '300': string,
      '400': string,
      '500': string,
      '600': string,
      '700': string,
      '800': string,
      '900': string
    
  };
  
    teal: {
      '50': string,
      '100': string,
      '200': string,
      '300': string,
      '400': string,
      '500': string,
      '600': string,
      '700': string,
      '800': string,
      '900': string
    
  };
  
    sky: {
      '50': string,
      '100': string,
      '200': string,
      '300': string,
      '400': string,
      '500': string,
      '600': string,
      '700': string,
      '800': string,
      '900': string
    
  };
  
    blue: {
      '50': string,
      '100': string,
      '200': string,
      '300': string,
      '400': string,
      '500': string,
      '600': string,
      '700': string,
      '800': string,
      '900': string
    
  };
  
    violet: {
      '50': string,
      '100': string,
      '200': string,
      '300': string,
      '400': string,
      '500': string,
      '600': string,
      '700': string,
      '800': string,
      '900': string
    
  };
  
    purple: {
      '50': string,
      '100': string,
      '200': string,
      '300': string,
      '400': string,
      '500': string,
      '600': string,
      '700': string,
      '800': string,
      '900': string
    
  };
  
    fuchsia: {
      '50': string,
      '100': string,
      '200': string,
      '300': string,
      '400': string,
      '500': string,
      '600': string,
      '700': string,
      '800': string,
      '900': string
    
  };
  
    pink: {
      '50': string,
      '100': string,
      '200': string,
      '300': string,
      '400': string,
      '500': string,
      '600': string,
      '700': string,
      '800': string,
      '900': string
    
  };
  
    rose: {
      '50': string,
      '100': string,
      '200': string,
      '300': string,
      '400': string,
      '500': string,
      '600': string,
      '700': string,
      '800': string,
      '900': string
    
  }
  };
  
type ColorSpaces = {
        rgb: [number, number, number];
        rgba: [number, number, number, number];
        hsl: [number, number, number];
        hsv: [number, number, number];
        hsi: [number, number, number];
        lab: [number, number, number];
        oklab: [number, number, number];
        lch: [number, number, number];
        oklch: [number, number, number];
        hcl: [number, number, number];
        cmyk: [number, number, number, number];
        gl: [number, number, number, number];
    }


  interface Color {
        /**
         * Get and set the color opacity.
         */
        alpha(a: number): Color;
        alpha(): number;

        darken(f?: number): Color;

        mix(targetColor: string | Color, f?: number, colorSpace?: keyof ColorSpaces): Color;

        brighten(f?: number): Color;

        /**
         * Changes the saturation of a color by manipulating the Lch chromacity.
         */
        saturate(s?: number): Color;

        /**
         * Similar to saturate, but the opposite direction.
         */
        desaturate(s?: number): Color;

        /**
         * Changes a single channel and returns the result a new chroma object.
         * @example
         * // half Lab lightness
         * chroma('orangered').set('lab.l', '*0.5')
         * @example
         * // double Lch saturation
         * chroma('darkseagreen').set('lch.c', '*2')
         */
        set(modechan: string, v: number | string): Color;

        /**
         * Returns a single channel value.
         * Also @see set
         */
        get(modechan: string): number;

        /**
         * Relative brightness, according to the
         * [WCAG]{@link http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef} definition. Normalized to
         * 0 for darkest black and 1 for lightest white.
         */
        luminance(): number;

        /**
         * Set luminance of color. The source color will be interpolated with black or white until the correct luminance is found.
         * The color space used defaults to RGB.
         */
        luminance(l: number, colorSpace?: InterpolationMode): Color;

        /**
         * Get color as hexadecimal string.
         *
         * @param mode `auto` - string will include alpha channel only if it's less than 1.
         *             `rgb`  - string will not include alpha channel.
         *             `rgba` - string will include alpha channel.
         *
         * @example
         * chroma('orange').hex() === '#ffa500'
         * chroma('orange').alpha(0.5).hex() === '#ffa50080'
         * chroma('orange').alpha(0.5).hex('rgb') === '#ffa500'
         */
        hex(mode?: 'auto' | 'rgb' | 'rgba'): string;

        /**
         * Returns the named color. Falls back to hexadecimal RGB string, if the color isn't present.
         */
        name(): string;

        /**
         * Returns a RGB() or HSL() string representation that can be used as CSS-color definition.
         * mode defaults to <code>'rgb'</code>
         */
        css(mode?: 'hsl'): string;

        /**
         * Estimate the temperature in Kelvin of any given color, though this makes the only sense for colors from the
         * [temperature gradient]{@link ChromaStatic.temperature} above.
         */
        temperature(): number;

        /**
         * Returns the numeric representation of the hexadecimal RGB color.
         *
         * @example
         * chroma('#000000').num() === 0
         * chroma('#0000ff').num() === 255
         * chroma('#00ff00').num() === 65280
         * chroma('#ff0000').num() === 16711680
         */
        num(): number;

        /**
         * Returns an array with the red, green, and blue component, each as
         * number within the range 0..255. Chroma internally stores RGB
         * channels as floats but rounds the numbers before returning them.
         * You can pass false to prevent the rounding.
         *
         * @example
         * chroma('orange').rgb() === [255,165,0]
         * chroma('orange').darken().rgb() === [198,118,0]
         * chroma('orange').darken().rgb(false) === [198.05,118.11,0]
         */
        rgb: (round?: boolean) => ColorSpaces['rgb'];

        /**
         * Just like color.rgb but adds the alpha channel to the returned array.
         *
         * @example
         * chroma('orange').rgba() === [255,165,0,1]
         * chroma('hsla(20, 100%, 40%, 0.5)').rgba() === [204,68,0,0.5]
         */
        rgba: (round?: boolean) => ColorSpaces['rgba'];

        /**
         * Returns an array with the `hue`, `saturation`, and `lightness`
         * component. Hue is the color angle in degree (`0..360`), saturation
         * and lightness are within `0..1`. Note that for hue-less colors
         * (black, white, and grays), the hue component will be NaN.
         *
         * @example
         * chroma('orange').hsl() === [38.82,1,0.5,1]
         * chroma('white').hsl() === [NaN,0,1,1]
         */
        hsl: () => ColorSpaces['hsl'];

        /**
         * Returns an array with the `hue`, `saturation`, and `value`
         * components. Hue is the color angle in degree (`0..360`),
         * saturation and value are within `0..1`. Note that for hue-less
         * colors (black, white, and grays), the hue component will be NaN.
         *
         * @example
         * chroma('orange').hsv() === [38.82,1,1]
         * chroma('white').hsv() === [NaN,0,1]
         */
        hsv: () => ColorSpaces['hsv'];

        /**
         * Returns an array with the `hue`, `saturation`, and `intensity`
         * components, each as number between 0 and 255. Note that for hue-less
         *  colors (black, white, and grays), the hue component will be NaN.
         *
         * @example
         * chroma('orange').hsi() === [39.64,1,0.55]
         * chroma('white').hsi() === [NaN,0,1]
         */
        hsi: () => ColorSpaces['hsi'];

        /**
         * Returns an array with the **L**, **a**, and **b** components.
         *
         * @example
         * chroma('orange').lab() === [74.94,23.93,78.95]
         */
        lab: () => ColorSpaces['lab'];

        /**
         * Returns an array with the **L**, **a**, and **b** components.
         *
         * @example
         * chroma('orange').oklab() === [0.7927,0.0566,0.1614]
         */
        oklab: () => ColorSpaces['oklab'];

        /**
         * Returns an array with the **Lightness**, **chroma**, and **hue**
         * components.
         *
         * @example
         * chroma('skyblue').lch() === [79.21,25.94,235.11]
         */
        lch: () => ColorSpaces['lch'];

        /**
         * Returns an array with the **Lightness**, **chroma**, and **hue**
         * components.
         *
         * @example
         * chroma('skyblue').oklch() === [0.8148,0.0819,225.8]
         */
        oklch: () => ColorSpaces['oklch'];

        /**
         * Alias of [lch](#color-lch), but with the components in reverse
         * order.
         *
         * @example
         * chroma('skyblue').hcl() === [235.11,25.94,79.21]
         */
        hcl: () => ColorSpaces['hcl'];

        /**
         * Just like color.rgb but adds the alpha channel to the returned
         * array.
         *
         * @example
         * chroma('orange').rgba() === [255,165,0,1]
         * chroma('hsla(20, 100%, 40%, 0.5)').rgba() === [204,68,0,0.5]
         */
        cmyk: () => ColorSpaces['cmyk'];

        /**
         * Returns an array with the cyan, magenta, yellow, and key (black)
         * components, each as a normalized value between 0 and 1.
         *
         * @example
         * chroma('33cc00').gl() === [0.2,0.8,0,1]
         */
        gl: () => ColorSpaces['gl'];

        /**
         * Test if a color has been clipped or not.
         * Colors generated from CIELab color space may have their RGB
         * channels clipped to the range of [0..255].
         * Colors outside that range may exist in nature but are not
         * displayable on RGB monitors (such as ultraviolet).
         *
         * @example
         * chroma.hcl(50, 40, 20).clipped() === true
         */
        clipped: () => boolean;

        /**
         * The unclipped RGB components.
         *
         * @example
         * chroma.hcl(50, 40, 100)._rgb._unclipped === [322.65,235.24,196.7,1]
         */
        _rgb: { _unclipped: ColorSpaces['rgba'] };
    }


    type ColorTemp = 'warm'|'cool'|'daylight'| 'incadescent'| 'fluorescent'
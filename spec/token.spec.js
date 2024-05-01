var specs = {
  1: {
    params: [{ l: 50, c: 31, h: 100, alpha: 0.5, mode: 'lch' }],
    description: 'Converts any color to hexadecimal',
    expect: '#7b794180'
  },
  2: {
    params: [['lch', 50, 31, 100, 0.5]],
    description: 'Converts a color tuple to an object with channels as keys',
    expect: { l: 50, c: 31, h: 100, alpha: 0.5, mode: 'lch' }
  },
  3: {
    params: [900],
    description: 'Converts any number between 0 and 16,777,215 to an RGB color',
    expect: '#001cbe'
  },
  4: {
    params: ['#b2c3f1'],
    description:
      'Converts any recognizable color token to a number between 0 and 16,777,215',
    expect: 11715569
  },
  5: {
    params: [2542],
    description:
      'Converts a number between 0 to 30,000 (Kelvins) to a hexadecimal string',
    expect: '#ffa44a'
  },
  6: {
    params: [
      {
        r: 0.4,
        g: 0.3,
        b: 0.7
      },
      'rgb'
    ],
    description:
      'Converts a color object to an array containing channel values and the colorspace ',
    expect: ['rgb', 0.4, 0.3, 0.7]
  }
};

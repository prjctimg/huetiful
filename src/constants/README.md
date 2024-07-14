# Constants

This module contains static values for example channel limits for colorspaces and hue ranges. These constants are used to clamp channels within displayable gamut when generating paletytes.

Channel ranges that cannot be displayed will return pure black or white (rarely though). For example in Jch colorspace certain ranges cannot be displayed in the RGB colorspace thus they return white or pure blsck. This is where gamut mapping comes in allowing us to render otherwise undisplayable colors on the screen.
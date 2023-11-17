# Palettes

A small collection of functions to help you kickstart your designs using mostly just a single base color and a few adjustable built-n parameters. All palette functions use `easingSmootherstep()` easing under the hood to ease certain values on channels being worked with.

Because certain end results are easier to achieve in different color spaces, colors are converted to a mode that is suited for the desired and result. For example pastel colors have a high `value` and low `saturation` there are easier to compute in the HSV color space. But for the most part colors are converted to LCH and then returned as optional hex strings or plain color objects.

### API
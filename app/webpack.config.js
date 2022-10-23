const path = require('path');

module.exports = {
    entry: './src/colorInterpolator.mjs',
    output: {
        filename: 'bundle.colorInterpolator.js',
        path: path.resolve(__dirname, 'build')

    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}
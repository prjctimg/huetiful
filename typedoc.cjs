/**@type
 * {import('typedoc').TypeDocOptions}
 */
module.exports = {
    entryPoints: ['./src/*/index.ts', './src/paramTypes.d.ts'],
    entryPointStrategy: 'resolve',
    out: 'temp',
    exclude: ['./src/color-maps', './src/fp'],
    gitRemote: 'main', readme: 'none'
}
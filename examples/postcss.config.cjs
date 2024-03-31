// const postcssJitProps = require('postcss-jit-props');
// const path = require('path');


// module.exports = (ctx) => ({
//   map: ctx.env === 'development' ? ctx.map : false,
//   syntax: {
//     html:'postcss-html',
//   },
//   plugins: [
//     require('postcss-import')(),
//     postcssJitProps( {
//       files: [
//         path.resolve(__dirname, 'node_modules/open-props/open-props.min.css'),
//       ]
//     }),
//     ctx.env === 'production' ? require('@csstools/postcss-rebase-url')() : false,
//     ctx.env === 'production' ? require('autoprefixer')() : false,
//     ctx.env === 'production' ? require('postcss-preset-env')() : false,
//     require("postcss-ts-classnames")({
//             dest: "src/classnames.d.ts",
//             // Set isModule if you want to import ClassNames from another file
//             isModule: true,
//             exportAsDefault: true, // to use in combination with isModule
//         }),
//   ],
// })


// import postcssJitProps from 'postcss-jit-props'
// //const path = import('path');
// //import OpenProps from 'open-props';
// import postcssTsClassnames from 'postcss-ts-classnames'
// import postcssImport from 'postcss-import'
// import rebaseUrl from '@csstools/postcss-rebase-url'
// import autoprefixer from 'autoprefixer'
// import postcssPresetEnv from 'postcss-preset-env'
// import path, { dirname } from 'path'


// const config = (ctx) => ({
//   map: ctx.env === 'development' ? ctx.map : false,
//   syntax: {
//     html: 'postcss-html',
//   },
//   plugins: [
//     postcssImport(),
//     postcssJitProps({
//       files: [
//         path.resolve(dirname(process.argv[1]), 'node_modules/open-props/open-props.min.css')
//       ]
//     }),
//     ctx.env === 'production' ? rebaseUrl() : false,
//     ctx.env === 'production' ? autoprefixer() : false,
//     ctx.env === 'production' ? postcssPresetEnv() : false,
//     postcssTsClassnames({
//       dest: "src/classnames.d.ts",
//       // Set isModule if you want to import ClassNames from another file
//       isModule: true,
//       exportAsDefault: true, // to use in combination with isModule
//     }),
//   ],
// })

// export default config

// import postcss from 'postcss';
// import DoIUse from 'doiuse/lib/DoIUse.js';

// postcss(new DoIUse({
//   browsers:['ie >= 6', '> 1%'],
//   ignore: ['rem'], // an optional array of features to ignore
//   ignoreFiles: ['**/normalize.css'], // an optional array of file globs to match against original source file path, to ignore
//   onFeatureUsage: (usageInfo) => {
//     console.log(usageInfo.message);
//   }
// })).process("a { background-size: cover; }")
// postcss(plugins).process(source, { syntax: syntax }).then(function (result) {
//     // An alias for the result.css property. Use it with syntaxes that generate non-CSS output.
//     result.content
// });
// const postcss = import('postcss');
// const postcssPresetEnv = import('postcss-preset-env');

// postcss([
//   postcssPresetEnv(/* pluginOptions */)
// ]).process(YOUR_CSS /*, processOptions */);

// const { readFileSync } = import('fs')

// const postcss = import('postcss')
// const postcssrc = import('postcss-load-config')

// const css = readFileSync('index.css', 'utf8')

// const ctx = { parser: true, map: 'inline' }

// postcssrc(ctx).then(({ plugins, options }) => {
//   postcss(plugins)
//     .process(css, options)
//     .then((result) => console.log(result.css))
// })"build": "NODE_ENV=production node postcss","start": "NODE_ENV=development node postcss"

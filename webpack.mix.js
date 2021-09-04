const mix = require("laravel-mix");
mix.ts("resources/js/index.tsx", "public/js").react();

mix.webpackConfig({
    output: {
        publicPath: "/public/",
        chunkFilename: "js/chunks.[name].js",
    },
});

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.js("resources/js/index.js", "public/js").postCss(
//     "resources/css/index.css",
//     "public/css",
//     [
//         //
//     ]
// );

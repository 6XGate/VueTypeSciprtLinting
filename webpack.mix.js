const mix = require("laravel-mix");

require("./build/mix-eslint");

const mixOptions = {
    extractVueStyles: true,
};

mix.ts("src/index.ts", "dist").
    sass("src/index.scss", "dist").
    copy("src/index.html", "dist").
    eslint({ formatter: "unix" }). // Comment out to make compile work.
    options(mixOptions).
    sourceMaps(false, "inline-source-map").
    setPublicPath('dist').
    extract();

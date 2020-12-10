/* eslint-disable @typescript-eslint/explicit-function-return-type */
// Modified from https://github.com/riasvdv/laravel-mix-eslint

const mix = require("laravel-mix");

class Eslint {
    dependencies() {
        this.requiresReload = `
            Dependencies have been installed. Please run "npm run dev" again.
        `;

        return [ "eslint", "eslint-loader", "eslint-plugin-vue" ];
    }

    register(options = {}) {
        this.options = options;
    }

    webpackRules() {
        return {
            enforce: "pre",
            test:    /\.(js|ts|vue)$/u,
            exclude: /node_modules/u,
            loader:  "eslint-loader",
            options: this.options,
        };
    }
}

mix.extend("eslint", new Eslint());

module.exports = {
    "root": true,
    "env": {
        "browser": true,
        "worker": true,
        "node": false,
        "es6": true
    },
    "plugins": [
        "vue",
        "@typescript-eslint",
        "import"
    ],
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:import/typescript",
        "plugin:import/warnings",
        "plugin:import/errors",
        "plugin:vue/recommended",
        "@vue/typescript"
    ],
    "parser": "vue-eslint-parser",
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module",
        "parser": "@typescript-eslint/parser",
        "project": "./tsconfig.json",
        "tsconfigRootDir": __dirname,
        "extraFileExtensions": ['.vue'],
    },
    "settings": {
        "import/parsers": {
            "@typescript-eslint/parser": [ ".ts" ],
            "vue-eslint-parser": [ ".vue" ]
        }
    },
};

module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true,
        "node": true,
        "jasmine": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "plugins": [
        "@typescript-eslint",
        "jasmine"
    ],
    "rules": {
        '@typescript-eslint/no-var-requires': 0,
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ]
    }
}

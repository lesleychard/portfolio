'use strict';

module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    env: {
        browser: true,
        node: true,
    },
    extends: [
        'airbnb',
        require.resolve('./config/eslint/style.js'),
        require.resolve('./config/eslint/react.js'),
    ],
    rules: {
    },
};

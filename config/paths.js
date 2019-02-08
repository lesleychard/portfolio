'use strict';

const path = require('path');

/**
 * Returns a path from the project's root folder
 * @param {string} relativePath path relative to project root
 */
function resolve(relativePath) {
    return path.resolve(__dirname, '../', relativePath);
}

module.exports = {
    build: resolve('build'),
    data: resolve('data'),
    indexHtml: resolve('public/index.html'),
    indexJs: resolve('src/index.js'),
    public: resolve('public'),
    src: resolve('src'),
};

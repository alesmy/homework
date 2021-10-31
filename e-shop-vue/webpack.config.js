const path = require('path');

const config = {
    entry: './src/index',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
};

module.exports = config;
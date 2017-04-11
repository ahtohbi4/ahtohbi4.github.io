'use strict';

const path = require('path');

const baseDir = process.cwd();

const HOST = 'localhost';
const PORT = 8080;

const AUTOPREFIXER = {
    browsers: [
        'last 2 versions',
    ],
};

const CSSO = {
    debug: 3,
    restructure: true,
};

const POSTCSS_IMPORT = {
    path: [
        path.join(baseDir, 'app/resources/views/blocks/'),
        path.join(baseDir, 'app/resources/views/pages/'),
    ],
};

const POSTCSS_URL = {
    basePath: path.join(baseDir, 'app/resources/views/'),
    url: 'inline',
};

module.exports = {
    HOST,
    PORT,

    AUTOPREFIXER,
    CSSO,
    POSTCSS_IMPORT,
    POSTCSS_URL,
};

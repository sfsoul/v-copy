const path = require('path');

function resolve (dir) {
    return path.join(__dirname, dir);
}
module.exports = {
    chainWebpack: config => {
        config.resolve.alias
            .set('css', resolve('public/css'))
            .set('tools', resolve('src/tools'))
    }
}
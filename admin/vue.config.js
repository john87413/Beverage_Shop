const path = require('path');

module.exports = {
    outputDir: path.resolve(__dirname, '../server/public'),
    devServer:{
        proxy: {
            '/admin': {
                target: 'http://localhost:5000'
            },
        }
    }
}
module.exports = app => {
    const mongoose = require("mongoose")
    const Config = require('../Config')
    const { URL } = Config;

    mongoose.connect(URL, {
        useNewUrlParser: true,
        useFindAndModify: false,
    })
    require('require-all')(__dirname + '/../modules')
}
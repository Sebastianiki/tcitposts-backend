const sequelize = require('sequelize')
const connectDB = require('../config/db')

const post = connectDB.define('posts', {
    id : {
        type: sequelize.INTEGER,
        primaryKey: true
    },
    name : {
        type: sequelize.TEXT
    },
    description : {
        type: sequelize.TEXT
    }
}, {
    timestamps : false 
})

module.exports = post
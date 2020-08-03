const Sequelize = require('sequelize');
require("dotenv").config({path:"variables.env"})
console.log(process.env.BD_PASS)
module.exports = new Sequelize(process.env.BD_NOMBRE,process.env.BD_USER,null,{
    host: process.env.BD_HOST,
    port: process.env.BD_PORT,
    dialect: "mysql",
    define:{
        timestamps: false
    },
    pool:{
        max:5,
        min:0,
        acquire: 30000,
        idle: 10000
    },
    operatorsAliases: false
});
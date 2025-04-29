const {Sequelize,DataTypes,} = require("sequelize");
require('dotenv').config();

const DB = ()=>{
    
const sequelize = new Sequelize(process.env.DB_URL);

sequelize.authenticate().then(()=>{
    console.log("Connected Success !");
}).catch((e)=>{
    console.log("Error : ",e);
})
}

module.exports = DB;
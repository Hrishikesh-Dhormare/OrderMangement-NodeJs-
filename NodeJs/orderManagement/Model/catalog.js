const {Sequelize, DataTypes} = require('sequelize');
require('dotenv').config();
const sequelize = new Sequelize("wjp", "dbt", "dbt", {
    dialect : 'mysql',
    host : process.env.HOST
});


const Catalog = sequelize.define('Catalog',{
    bookId : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true,
    },
    title : {
        type : DataTypes.STRING,
        allowNull : false
    },
    author : {
        type : DataTypes.STRING,
    },
    price : {
        type : DataTypes.DOUBLE,
        allowNull : false
    },
    quantity : {
        type : DataTypes.INTEGER,
        allowNull : false
    }
});

//sequelize.sync().then(()=>{console.log('Database Connected -Catalog Table')}).catch((err)=>{console.log('Database sync Error',err)});

module.exports = { Catalog};

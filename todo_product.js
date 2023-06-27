const Sequelize=require('sequelize');

const db=require('../util/database');
const Product=db.define('todo-do',{
    id:{
        type:Sequelize.INTEGER,
        allowNull:true,
        primaryKey:true,
        autoIncrement:true,
    },
    todo:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    description:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    status:{
        type:Sequelize.STRING,
        allowNull:true,
    }
})
module.exports=Product;
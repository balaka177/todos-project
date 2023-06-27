const express=require('express');
const path=require('path');

const Product=require('../models/todo_product');

const { json } = require('body-parser');


exports.home=(req,res)=>{
    res.sendFile(path.join('/home/vijay/Videos','todo_index.html'));
}

exports.add_data=(req,res)=>{
    const todo=req.body.todo;
    const des=req.body.des;
    Product.create({
        todo:todo,
        description:des,
        status:'not_done'
    }).then((resp)=>{
        res.redirect('/');
    }).catch(err=>console.log(err))
}

exports.todos=async(req,res)=>{
    const users=await Product.findAll({where:{status:"not_done"}});
    res.status(200).json({allUsers:users})
}

exports.todos_done=async(req,res)=>{
    const users=await Product.findAll({where:{status:'done'}});
    res.status(200).json({allUsers:users})
}

exports.deletedata=async(req,res)=>{
    const uid=req.params.id;
    await Product.destroy({where:{id:uid}});
}

exports.done=async(req,res)=>{
    const uid=req.params.id;
    Product.update({status:'done'},{where:{id:uid}})
    
}
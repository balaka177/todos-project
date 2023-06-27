const express=require('express');

const router=express.Router();

const controller=require('../controllers/todo_contro');

router.get('/',controller.home);

router.post('/add_data',controller.add_data);

router.get('/todos',controller.todos);

router.get('/todos_done',controller.todos_done);

router.delete('/delete/:id',controller.deletedata)

router.get('/done/:id',controller.done);

module.exports=router;
const express=require('express');

const app=express();

const bodyparser=require('body-parser');

const db=require('./util/database');

const route=require('./routes/todo_routes');

app.use(express.urlencoded({extended:false}))
app.use(bodyparser.json());

app.use(route);

db.sync()
.then((res)=>{
    console.log(res);
})
.catch(err => {
    console.log(err);
})
app.listen(8000);
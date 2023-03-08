const express= require ('express');
const colors= require('colors');
const mongoose = require('mongoose');
const dotenv= require('dotenv').config();
const connectDB = require('./config/db')
const app = express();
connectDB();
const myTodo = require('./Model/todoModel')
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.listen(process.env.PORT, ()=>{console.log(`server running on ${process.env.PORT}`)});
// middleware
app.use((req,res,next) =>{
    console.log(req.path, req.method)
    next()
})
app.post("/todos", async(req,res) => {
    try{
const todo= await myTodo.create(req.body)
res.json(todo);
    }
    catch(error)
    {console.log(error)}
})
app.get("/todos", async(req,res) => {
    try{
        const todos = await myTodo.find();
        res.json(todos)
    } 
    catch(error){
        console.log(error)

    }
})
app.put('/todos/:id', async(req,res)=>{
    const id= req.params.id;
    try{
        const updatedTodo = await myTodo.findByIdAndUpdate(id,req.body,{new:true})
    res.json(updatedTodo )
    } 
    catch(error){
        console.log(error)
    }

})
app.delete('/todos/:id',async(req,res)=> {
    try{
        const deletedTodo = await myTodo.findByIdAndDelete(req.params.id)
        res.json(deletedTodo)
    } catch(errro){
        console.log(error)
    }
})
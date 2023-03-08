import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createTodo} from '../Redux/todoSlice';

function AddTodo() {
    const [task,setTask]= useState('');
    const dispatch = useDispatch();
    const onChange = (e)=>{
        setTask(e.target.value)
    }
     const onSubmit =(e)=>{
        e.preventDefault();
    dispatch(createTodo(task));
    setTask();
       }
  return (
    <div><h1><i>Add you task please</i></h1>
    <br></br>
    <form onSubmit={onSubmit}>
        <input type='text' onChange={onChange}/>
        <button type='submit'> Add me</button>
    </form>
    </div>
  )
}

export default AddTodo
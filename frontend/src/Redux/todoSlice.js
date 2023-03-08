import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"
 export const getAllTodos = createAsyncThunk('todo/getAll', async()=>{
    try{
        const {data} = await axios.get("http://localhost:7000/todos")
       return data;
    }
    catch(error){console.log(error)}
 })
 export const createTodo = createAsyncThunk("todo/create", async (task) => {
    try {
      const { data } = await axios.post("http://localhost:7000/todos", {task});
      return data;
    } catch (error) {
      console.log(error);
    }
  });
const todoSclice = createSlice({
    name: "todo",
  initialState: {},
    extraReducers: (builder) => {
        builder
          .addCase(getAllTodos.pending, (state) => {
            state.loading = true
          })
          .addCase(getAllTodos.fulfilled, (state, action) => {
            state.loading = false
            state.todoList = action?.payload
            state.appErr=undefined
            state.serverErr=undefined
          })
          .addCase(getAllTodos.rejected, (state, action) => {
            state.loading = false
            state.appErr=action?.payload?.message
            state.serverErr=action?.error?.message
          })
          .addCase(createTodo.pending, (state) => {
            state.loading = true
          })
          .addCase(createTodo.fulfilled, (state, action) => {
            state.loading = false
            state.createdTodo = action?.payload;
            state.appErr=undefined
            state.serverErr=undefined
          })
          .addCase(createTodo.rejected, (state, action) => {
            state.loading = false
            state.appErr=action?.payload?.message
            state.serverErr=action?.error?.message
          })
        }
})
export default todoSclice.reducer;
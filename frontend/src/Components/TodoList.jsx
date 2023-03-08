
import { getAllTodos } from '../Redux/todoSlice'
import Todo from './Todo'
import{useDispatch,useSelector} from 'react-redux'
import { useEffect } from 'react'
function TodoList(props) {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getAllTodos());
  },[dispatch])
  const {todoList,loading} = useSelector((state)=> state.todos)

  return (
        <div>
{loading ? (<p>...Loading....</p>) : (todoList?.map((el) => <Todo todo={el} key={el.id} />))}
    
  </div>
    )
}

export default TodoList


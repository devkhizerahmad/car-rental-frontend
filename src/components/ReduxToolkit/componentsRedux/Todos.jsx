import { useSelector , useDispatch} from 'react-redux'
import { removeTodo } from '../features/Todo/todoSlice';

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  console.log("todos dispatch :", todos, "dispatch :", dispatch)
  return (
    <div>
      <h3>Todos</h3>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
             {todo.text}
            <button onClick={() => dispatch(removeTodo(todo.id))}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todos
import { useDispatch, useSelector } from "react-redux"
import AddForm from "./AddForm"
import { deleteTodo, markAsDone } from "../features/todo/todoSlice"
import "./Todo.css"

export default function Todo(){
        const todos = useSelector((state)=>state.todos)
        console.log(todos)
        let dispatch = useDispatch()

        const handleDelete= (id) =>{
            console.log("delete",id)
            dispatch(deleteTodo(id))
        }

        const handleMarkAsDone = (id) =>{
            console.log("Mark")
            dispatch(markAsDone(id))
        }
    
    return(
   <>
  <div className="todo-container">
    <h1 className="title">📝 Todo App</h1>

    <AddForm />

    <h2 className="subtitle">Tasks</h2>

    <ul className="todo-list">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={`todo-item ${todo.isDone ? "completed" : ""}`}
        >
          <span className="task-text">{todo.task}</span>

          <div className="btn-group">
            <button
              className="delete-btn"
              onClick={() => handleDelete(todo.id)}
            >
              Delete
            </button>

            {!todo.isDone && (
              <button
                className="done-btn"
                onClick={() => handleMarkAsDone(todo.id)}
              >
                Done
              </button>
            )}
          </div>
        </li>
      ))}
    </ul>
  </div>
</>
    )
}
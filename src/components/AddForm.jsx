import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import "./AddForm.css"

export default function AddForm(){
    let [task, setTask] = useState("")
    let dispatch = useDispatch()

    let handleSubmit = (evt)=>{
        evt.preventDefault()
        console.log(task)
        dispatch(addTodo(task))
        setTask("")
    }
    return(

        <>
        <form className="todo-form" action="" onSubmit={handleSubmit}>
            <input className="todo-input" type="text" value={task} onChange={(e)=>setTask(e.target.value)}/>
            <button className="add-btn">Add-Task</button>
        </form>
        </>
    )
}
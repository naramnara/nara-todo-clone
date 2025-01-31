import React from "react";
import { useDispatch } from "react-redux";
import { toggleTask, removeTask } from "../redux/actions";
const Task = ({task, listId})=>{
    const dispatch = useDispatch();
    return (
        <div>
            <input 
            type="checkbox"
            checked = {task.completed}
            onChange={()=>dispatch(toggleTask(listId, task.id))}></input>{task.title}
            <button onClick={()=>dispatch(removeTask(listId, task.id))}>delete tasks</button>
            <input type="datetime-local"></input></div>
    );
};
export default Task;
import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions";
const TaskForm =({listId}) => {
    const [taskTitle, setTaskTitle] = useState("");
    const dispatch =useDispatch();
    const handleAddTask = () =>{
        if(taskTitle) {
            dispatch(addTask(listId, taskTitle));
        setTaskTitle("");
    }
};
return (
    <div>
        <input
        type="text"
        value = {taskTitle}
        onChange={(e)=>setTaskTitle(e.target.value)}
        placeholder="task name"
        onKeyDown={(e)=>{
            if(e.key==="Enter"){
                handleAddTask();
            }
        }}></input>
        <button onClick={handleAddTask}>
            add task 
        </button>
    </div>
);};
export default TaskForm;

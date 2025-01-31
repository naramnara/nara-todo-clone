import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTaskList, removeTaskList } from "../redux/actions";
import TaskForm from "./TaskForm";
import Filter from "./Filter";
import Task from "./Task";
const TaskList = () =>{
    const [taskListName, setTaskListName] = useState("");
    const taskLists = useSelector(state=>state.taskLists);
    const filter = useSelector(state=>state.filter);
    const dispatch = useDispatch();
    const handleAddTaskList  = () =>{
        if(taskListName){
            dispatch(addTaskList(taskListName));
            setTaskListName("");
        }
    };
    const handleRemoveList=(listId)=>{
        dispatch(removeTaskList(listId));
    };
    const filteredTasklists = taskLists.map(list=>({
        ...list, tasks: list.tasks.filter(task=>{
            if(filter ==="all")
                return true;
            if(filter ==="done")
                return task.completed;
            if(filter === "in process") 
                return !task.completed;
            return true;
        }),
    }));
return (
    <>
    <input type = "text"
    value = {taskListName}
    onChange={(e)=>setTaskListName(e.target.value)}
    placeholder="write task"
    onKeyDown={(e)=>{
        if(e.key==="Enter"){
            handleAddTaskList();
        }
    }}
    ></input>
    <button onClick={handleAddTaskList}>add new list</button>
    <Filter />
    {filteredTasklists.map(list=>(
        <div key={list.id}>
        <h2>{list.title}<button onClick={()=>handleRemoveList(list.id)}>delete list</button></h2>
        <TaskForm listId={list.id} />
        {list.tasks.map(task=>(
            <Task key={task.id} task={task} listId={list.id} />))}
    </div>))}
    </>
);
};


export default TaskList;

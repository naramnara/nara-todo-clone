export const ADD_TASK_LIST = 'ADD_TASK_LIST';
export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const REMOVE_TASK_LIST = 'REMOVE_TASK_LIST';
export const TOGGLE_TASK='TOGGLE_TASK';
export const SET_FILTER = 'SET_FILTER';
export const addTaskList = (title) => ({
    type: ADD_TASK_LIST,
    payload: title
});
export const addTask = (listId, taskTitle) =>({
    type: ADD_TASK,
    payload: {listId, taskTitle}
});
export const removeTask = (listId, taskId) =>({
    type: REMOVE_TASK, 
    payload: {listId, taskId}
});
export const removeTaskList = (listId) =>({
    type: REMOVE_TASK_LIST,
    payload: listId
});
export const toggleTask = (listId, taskId)=>({
    type: TOGGLE_TASK,
    payload: {listId, taskId}
});
export const setFilter = (filter)=>({
    type: SET_FILTER,
    payload: filter
});
import { ADD_TASK, ADD_TASK_LIST, REMOVE_TASK, REMOVE_TASK_LIST, TOGGLE_TASK, SET_FILTER,} from "./actions";
const initState  = {
    taskLists:[],
    filter: 'all',
};
const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_TASK_LIST:
            return {
                ...state, taskLists:
                [...state.taskLists, {
                    id: Date.now(),
                    title: action.payload,
                    tasks: [] }],
                };
                case ADD_TASK:
                    return{
                        ...state, taskLists:
                        state.taskLists.map(list=>list.id===action.payload.listId ? {...list, tasks:
                            [...list.tasks, {id: Date.now(),
                                title: action.payload.taskTitle,
                                completed:false
                            }]
                        }
                    :list),
                    };
                    case REMOVE_TASK:
                        return{
                            ...state, taskLists:
                            state.taskLists.map(list=>
                                list.id===action.payload.listId? {...list, tasks:
                                    list.tasks.filter(
                                task=>task.id!==action.payload.taskId) }:list), };
                                case REMOVE_TASK_LIST:
                                    return{
                                        ...state, taskLists:
                                        state.taskLists.filter(list=>
                                            list.id!==action.payload),
                                        
                                    };
                                    case TOGGLE_TASK:
                                        return{
                                            ...state, taskLists:
                                            state.taskLists.map(list=>
                                                list.id===action.payload.listId?{
                                                    ...list, tasks:
                                                    list.tasks.map(task=>
                                                        task.id===action.payload.taskId?{...task, completed: !task.completed}:task
                                                    ),
                                                } : list
                                            ),
                                        };
                                        case SET_FILTER:
                                            return{
                                                ...state, filter:
                                                action.payload };
                                                default:
                                                    return state;
                                            }
                            };


export default rootReducer;

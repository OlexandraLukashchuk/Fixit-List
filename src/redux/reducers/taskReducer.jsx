import { NEW_TASK, COMPLETE_TASK, EDIT_TASK, MOVE_TO_HISTORY, DELETE_TASK } from "../action/taskAction";

const initialState = {
    tasks: [],
    completedTasks: [],
};

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEW_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
            };
        case COMPLETE_TASK:
            return {
                ...state,
                tasks: state.tasks.map((task) =>
                    task.id === action.payload ? { ...task, completed: !task.completed } : task
                ),
            };
        case EDIT_TASK:
            const editedTaskData = action.payload;
            const updatedTasks = state.tasks.map((task) =>
                task.id === editedTaskData.id ? { ...task, ...editedTaskData } : task
            );
            return { ...state, tasks: updatedTasks };
        case MOVE_TO_HISTORY:
            const taskId = action.payload;
            const taskToMove = state.tasks.find((task) => task.id === taskId);
            if (taskToMove) {
                return {
                    ...state,
                    tasks: state.tasks.filter((task) => task.id !== taskId),
                    completedTasks: [...state.completedTasks, taskToMove],
                };
            }
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter((task) => task.id !== action.payload),
            }
        


        default:

            return state;

    }
}

export default taskReducer;
import { v4 as uuidv4 } from 'uuid';
export const NEW_TASK = 'NEW_TASK';
export const COMPLETE_TASK = 'COMPLETE_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const MOVE_TO_HISTORY = 'MOVE_TO_HISTORY';
export const DELETE_TASK = 'DELETE_TASK';


export const addTask = (addData) => {
    const newTask = {
        id: uuidv4(),
        ...addData,
        completed: false,
    };
    return {
        type: NEW_TASK,
        payload: newTask,
    };
};

export const completeTask = (completeData) => {
    return {
        type: COMPLETE_TASK,
        payload: completeData,
    };
};

export const editTask = (taskData) => {
    return {
        type: EDIT_TASK,
        payload: taskData,
    };
};
export const moveToHistory = (taskId) => {
    return {
        type: MOVE_TO_HISTORY,
        payload: taskId,
    };
};

export const deleteTask = (taskdelete) => {
    return {
      type: DELETE_TASK,
      payload: taskdelete,
    };
  };

  
  
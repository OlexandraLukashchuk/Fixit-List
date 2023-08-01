import { configureStore, combineReducers } from "@reduxjs/toolkit"; // Import configureStore

import taskReducer from "../reducers/taskReducer";

const rootReducer = combineReducers({
  task: taskReducer,
});

const store = configureStore({
  reducer: rootReducer, 
});

export default store;

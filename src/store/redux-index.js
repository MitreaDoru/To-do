import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./tasks";
import uiReducer from "./showAddForm-slice";
const store = configureStore({
  reducer: { tasksList: tasksReducer, ui: uiReducer },
});

export default store;

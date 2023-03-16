import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";
const initialState = {
  tasks: [
    { id: v4(), title: "Work", description: "finish the app", showEdit: false },
    { id: v4(), title: "Home", description: "Clean", showEdit: false },
  ],
  title: "",
  description: "",
  showEditForm: false,
};
const tasksSlice = createSlice({
  name: "tasksList",
  initialState: initialState,
  reducers: {
    addTask(state) {
      if (state.title.length > 0 && state.description.length > 3) {
        state.tasks.unshift({
          id: v4(),
          title: state.title,
          description: state.description,
          showEdit: false,
        });
        state.title = "";
        state.description = "";
      }
    },
    newTitle(state, action) {
      state.title = action.payload;
    },
    newDescription(state, action) {
      state.description = action.payload;
    },
    deleteTask(state, action) {
      state.tasks.forEach((task) => {
        if (task.id === action.payload) {
          state.tasks = state.tasks.filter(
            (task) => task.id !== action.payload
          );
        }
      });
    },
    editTask(state, action) {
      const { id, title, description } = action.payload;
      state.tasks.forEach((task) => {
        if (task.id === id) {
          task.title = title;
          task.description = description;
          task.showEdit = !task.showEdit;
        }

      });
      state.description = ''
      state.title = ''
    },
    toggleEditTask(state, action) {
      const id = action.payload;
      state.tasks.forEach((task) => {
        if (task.id === id) {
          task.showEdit = !task.showEdit;
          state.title = task.title;
          state.description = task.description;
        }
      });
    },
  },
});

export const tasksAction = tasksSlice.actions;
export default tasksSlice.reducer;

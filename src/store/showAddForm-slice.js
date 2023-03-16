import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { showTaskForm: false },
  reducers: {
    toggleAddTask(state) {
      state.showTaskForm = !state.showTaskForm;
    },
  },
});

export const uiAction = uiSlice.actions;

export default uiSlice.reducer;

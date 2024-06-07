import { createSlice } from "@reduxjs/toolkit";
import {
  fetchTasks,
  getTask,
  deleteTask,
  addTask,
  editTask,
  moveTask,
} from "./operations";

const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    items: [],
    loading: false,
    error: false,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchTasks.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(getTask.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getTask.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(getTask.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(deleteTask.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      })
      .addCase(deleteTask.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(addTask.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addTask.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(editTask.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(editTask.fulfilled, (state, action) => {
        const taskIndex = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        // -1 ??????????? -------------------------------------------------
        state.items[taskIndex] = action.payload;
      })
      .addCase(editTask.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(moveTask.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(moveTask.fulfilled, (state, action) => {})
      .addCase(moveTask.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
});

export const taskReducer = taskSlice.reducer;

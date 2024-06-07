import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTasks = createAsyncThunk(
  "tasks/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/tasks????????????????????????");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getTask = createAsyncThunk(
  "tasks/getTask",
  async (taskId, thunkAPI) => {
    try {
      const response = await axios.get(`/tasks/${taskId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async (taskId, thunkAPI) => {
    try {
      const response = await axios.delete(`/tasks/${taskId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addTask = createAsyncThunk(
  "tasks/addTask",
  async (newTask, thunkAPI) => {
    try {
      const response = await axios.post("/tasks", newTask);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editTask = createAsyncThunk(
  "tasks/updateTask",
  async (editTask, thunkAPI) => {
    try {
      const response = await axios.patch(`/tasks/${taskId}`, editTask);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const moveTask = createAsyncThunk(
  "tasks/moveTasks",
  async (taskId, thunkAPI) => {
    try {
      const response = await axios.delete(`/tasks/${taskId}`);
      const moveTask = response.data;
      //   addTask в обрану колонку
      // return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBoards = createAsyncThunk("boards/fetchAll", async (_, thunkAPI) => {
  try {
    const response = await axios.get("/api/boards/");
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const getBoard = createAsyncThunk(
  "boards/getBoard",
  async (boardId, thunkAPI) => {
    try {
      const response = await axios.get(`/api/boards/${boardId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteBoard = createAsyncThunk(
  "boards/deleteBoard",
  async (boardId, thunkAPI) => {
    try {
      const response = await axios.delete(`/api/boards/${boardId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addBoard = createAsyncThunk(
  "boards/addBoard",
  async (newBoard, thunkAPI) => {
    try {
      const response = await axios.post("/api/boards/", newBoard);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editBoard = createAsyncThunk(
  "boards/updateBoard",
  async (editBoard, thunkAPI) => {
    try {
      const response = await axios.put(`/api/boards/${boardId}`, editBoard);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// -------------------&&&&&&&&&&&&&&&&&----------------------
export const moveBoard = createAsyncThunk(
  "boards/moveBoard",
  async (boardId, thunkAPI) => {
    try {
      const response = await axios.delete(`/api/boards/${boardId}`);
      const moveBoard = response.data;
      //   addBoard в обрану колонку
      // return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

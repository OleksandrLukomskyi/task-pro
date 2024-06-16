import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



// --------------------------------------------------------
export const fetchColumns = createAsyncThunk(
  "columns/fetchAll",
  async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;
    try {
      const response = await axios.get("https://project-back-codewave1-rqmw.onrender.com/api/columns/" , {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log(response.data)
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        message: error.message,
        code: error.code,
      });
    }
  }
);

// ---------------------------------------------------------
export const getColumn = createAsyncThunk(
  "columns/getColumn",
  async (columnId, thunkAPI) => {

    try {
      const response = await axios.get(`https://project-back-codewave1-rqmw.onrender.com/api/columns/${columnId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        message: error.message,
        code: error.code,
      });
    }
  }
);

// ---------------------------------------------------------
export const createColumn = createAsyncThunk(
  "columns/createColumn",
  async (newColumn, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;
    console.log("Token being sent:", token); 
    try {
      const response = await axios.post("https://project-back-codewave1-rqmw.onrender.com/api/columns/", newColumn, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        message: error.message,
        code: error.code,
      });
    }
  }
);

// ---------------------------------------------------------
export const deleteColumn = createAsyncThunk(
  "columns/deleteColumn",
  async (columnId, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;
    try {
      const response = await axios.delete(`https://project-back-codewave1-rqmw.onrender.com/api/columns/${columnId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        message: error.message,
        code: error.code,
      });
    }
  }
);

// ---------------------------------------------------------
export const editColumn = createAsyncThunk(
  "columns/updateColumn",
  async ({ columnId, editColumn }, thunkAPI) => {
    try {
      const response = await axios.put(`https://project-back-codewave1-rqmw.onrender.com/api/columns/${columnId}`, editColumn);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        message: error.message,
        code: error.code,
      });
    }
  }
);

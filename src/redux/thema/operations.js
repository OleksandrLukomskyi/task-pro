import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const editThema = createAsyncThunk(
  "thema",
  async (Thema, thunkAPI) => {
    try {
      const response = await axios.patch("users/thema", Thema);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
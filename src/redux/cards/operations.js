import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createCard = createAsyncThunk(
  "cards/createCard",
  async (newCard, thunkAPI) => {
    try {
      const response = await axios.post("/api/cards/", newCard);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editCard = createAsyncThunk(
  "cards/updateColumn",
  async (editCard, thunkAPI) => {
    try {
      const response = await axios.put(`/api/cards/${cardId}`, editCard);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteCard = createAsyncThunk(
  "cards/deleteCard",
  async (cardId, thunkAPI) => {
    try {
      const response = await axios.delete(`/api/cards/${cardId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

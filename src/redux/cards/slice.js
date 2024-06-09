import { createSlice } from "@reduxjs/toolkit";
import { createCard, editCard, deleteCard } from "./operations";
import { logOut } from "../auth/operations";

const cardSlice = createSlice({
  name: "cards",
  initialState: {
    items: [],
    loading: false,
    error: false,
  },
  extraReducers: (builder) => builder.addCase(),
});

export const caedReducer = cardSlice.reducer;

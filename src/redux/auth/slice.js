import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  logIn,
  editUser,
  logOut,
  refreshUser,
  // userThema,
} from './operations.js';

const initialState = {
  user: {
    userName: null,
    email: null,
    avatarURL: null,
  },
  token: '', //null
  thema: 'light',
  isLoggedIn: false,
  isRefreshing: false,
  loading: false,
  error: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: builder =>
    builder
      .addCase(register.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.loading = false;
      })
      .addCase(register.rejected, state => {
        state.loading = false;
        state.error = true;
      })
      .addCase(logIn.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.loading = false;
      })
      .addCase(logIn.rejected, state => {
        state.loading = false;
        state.error = true;
      })
      // ------------------------------------------------------------------------
      .addCase(editUser.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(editUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        // state.token = action.payload.token;
        state.loading = false;
      })
      .addCase(editUser.rejected, state => {
        state.loading = false;
        state.error = true;
      })
      // --------------------------------------------------------------------------
      .addCase(logOut.fulfilled, state => {
        state.user = {
          userName: null, // userName в initialState
          email: null,
          // password: null, // password нема в state
          avatarURL: null,
        };
        state.token = ''; //null
        state.isLoggedIn = false;
        state.loading = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.user = null;
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
        localStorage.removeItem('token');
      })
      // додано обробник refreshUser.rejected
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
        state.error = true;
      }),
});

export const authReducer = authSlice.reducer;

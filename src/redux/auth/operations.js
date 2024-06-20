import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { store } from '../store';

// --------------------------------------------------
axios.defaults.baseURL = 'https://project-back-codewave1-rqmw.onrender.com';
// --------------------------------------------------

const setAuthHeader = token => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common['Authorization'] = '';

  localStorage.removeItem('token'); // Видалення токена з локального сховища
};

// інтерсептор для обробки помилок
axios.interceptors.response.use(
  response => response, // Якщо відповідь успішна, повертаємо її
  error => {
    // Якщо отримали помилку 401 (Unauthorized)
    if (error.response?.status === 401) {
      clearAuthHeader(); // очищуємо токен
      store.dispatch(logOut()); //  робимо logOut
      window.location.href = '/'; // Перенаправлення на сторінку входу
    }
    return Promise.reject(error);
  }
);

// credentials - облікові дані отримані з форми
export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/register', credentials);
      // console.log(response.status);
      // if (!response.ok) {
      //   console.log("Email in use!");
      // }
      setAuthHeader(response.data.token);
      localStorage.setItem('token', response.data.token); // збереження токена в localstorage
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data || error.message;
      if (error.response.status === 409) {
        alert('Email in use');
      }
      return thunkAPI.rejectWithValue({ message: errorMessage });
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', credentials);
      setAuthHeader(response.data.token);
      localStorage.setItem('token', response.data.token); // збереження токена в localstorage
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data || error.message;
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const editUser = createAsyncThunk(
  'auth/edit',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.patch('users/edit', credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const response = await axios.post('users/logout');
    clearAuthHeader();
    return response.data; //add
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const {
      auth: { token },
    } = thunkAPI.getState();
    setAuthHeader(token);

    try {
      const response = await axios.get('/users/current');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
    // {
    //   condition: (_, { getState }) => {
    //     const reduxState = getState();
    //     const savedToken = reduxState.auth.token;
    //     return savedToken !== null;
    //   },
  }
);

// ------------------------
// export const userThema = createAsyncThunk("auth/thema", async (_, thunkAPI) => {
//   try {
//     const response = await axios.patch("/users/thema");
//     setAuthHeader(response.data.token);
//     return response.data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error);
//   }
// });

// ----------------------------
export const help = createAsyncThunk('auth/support', async (_, thunkAPI) => {
  try {
    const response = await axios.post('/api/help/');
    setAuthHeader(response.data.token);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

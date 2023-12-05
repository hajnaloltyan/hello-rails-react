import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchGreeting = createAsyncThunk(
  'greeting/fetchGreeting',
  async () => {
    const response = await axios.get('/greetings/api-random');
    return response.data.greeting;
  }
);

const greetingSlice = createSlice({
  name: 'greeting',
  initialState: {
    greeting: null,
    loading: false,
    error: null,
  },
  reducers: {
    setGreeting: (state, action) => {
      state.greeting = action.payload;
    },
  },
  extraReducers: {
    [fetchGreeting.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchGreeting.fulfilled]: (state, action) => {
      state.greeting = action.payload;
      state.loading = false;
    },
    [fetchGreeting.rejected]: (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    },
  },
});

export const randomGreeting = (state) => state.greeting.greeting;

export const { setGreeting } = greetingSlice.actions;

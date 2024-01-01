import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAsyncUsers = createAsyncThunk(
  "user/getAsyncUsers",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      // بع عنوان پیلود به دیتا دسترسی داریم
      return data;
    } catch (error) {
      // به عنوان پیلود به خطا دسترسی داریم
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  isLoading: false,
  data: [],
  error: "",
};

const userSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: {
    // پراپرتی های یک آبجکت داینامیک را باید داخل برکت بنویسیم
    [getAsyncUsers.pending]: (state, action) => {
      state.isLoading = true;
      state.data = [];
      state.error = "";
    },
    [getAsyncUsers.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    [getAsyncUsers.rejected]: (state, action) => {
      state.isLoading = false;
      state.data = [];
      state.error = action.payload;
    },
  },
});

export default userSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfCakes: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    buyCake: (state, action) => {
      state.numOfCakes = state.numOfCakes - action.payload;
    },
  },
});

// action creator:
export const { buyCake } = cakeSlice.actions;

// main reducer:
export default cakeSlice.reducer;

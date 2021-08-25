import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    filter: (action) => action.payload,
  },
});

export const { filter } = filterSlice.actions;
export default filterSlice.reducer;

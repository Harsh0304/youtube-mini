import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "items",
  initialState: {
    searchTerm: "",
    data: [],
  },
  reducers: {
    addData: (state, action) => {
      state.data.push(action.payload);
    },
    changeSearchInput: (state, action) => {
      state.searchTerm = action.payload;
      //   console.log(state.searchTerm);
    },
  },
});

export const { addData, changeSearchInput } = dataSlice.actions;
export default dataSlice.reducer;

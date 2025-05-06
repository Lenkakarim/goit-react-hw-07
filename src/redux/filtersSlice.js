import { createSlice } from "@reduxjs/toolkit";
const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    setFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export default filtersSlice.reducer;
export const { setFilter } = filtersSlice.actions;
export const selectNameFilter = (state) =>
  state.filter.name;

import { createSlice } from "@reduxjs/toolkit";
import { registerItem, getAllItems, updateAnItem } from "./itemFxn";

const initialState = {
  itemList: [],
  loading: false,
  success: false,
  error: null,
};

export const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    resetItems: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerItem.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerItem.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(registerItem.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      })
      .addCase(getAllItems.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllItems.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.itemList = action.payload;
      })
      .addCase(getAllItems.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      })
      .addCase(updateAnItem.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateAnItem.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(updateAnItem.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      });
  },
});

export const { resetItems } = itemSlice.actions;
export default itemSlice.reducer;

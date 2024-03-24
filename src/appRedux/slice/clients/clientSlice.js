import { createSlice } from "@reduxjs/toolkit";
import { registerClient, getAllClients, updateAClient } from "./clientFxn";

const initialState = {
  clientList: [],
  client: [],
  loading: false,
  success: false,
  error: null,
};

export const clientSlice = createSlice({
  name: "client",
  initialState,
  reducers: {
    resetClient: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerClient.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerClient.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(registerClient.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      })
      .addCase(getAllClients.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllClients.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.clientList = action.payload;
      })
      .addCase(getAllClients.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      })
      .addCase(updateAClient.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateAClient.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(updateAClient.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      });
  },
});

export const { resetClient } = clientSlice.actions;
export default clientSlice.reducer;

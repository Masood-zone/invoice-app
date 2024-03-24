import { createSlice } from "@reduxjs/toolkit";
import { registerInvoice, getAllInvoices, updateAnInvoice } from "./invoiceFxn";

const initialState = {
  invoiceList: [],
  loading: false,
  success: false,
  error: null,
};

export const invoiceSlice = createSlice({
  name: "invoice",
  initialState,
  reducers: {
    resetInvoice: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerInvoice.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerInvoice.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(registerInvoice.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      })
      .addCase(getAllInvoices.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllInvoices.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.invoiceList = action.payload;
      })
      .addCase(getAllInvoices.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      })
      .addCase(updateAnInvoice.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateAnInvoice.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(updateAnInvoice.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      });
  },
});

export const { resetInvoice } = invoiceSlice.actions;
export default invoiceSlice.reducer;

import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createInvoice,
  getInvoices,
  updateInvoice,
  deleteInvoice,
} from "../../api/invoice/index";

export const registerInvoice = createAsyncThunk(
  "invoice/create-invoice",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await createInvoice(payload);
      return response.data;
    } catch (error) {
      console.log(error);
      if (!error.response) {
        throw error;
      }
      rejectWithValue(error.response);
    }
  }
);

export const getAllInvoices = createAsyncThunk(
  "invoice/get-invoices",
  async () => {
    const response = await getInvoices();
    return response.data;
  }
);

export const updateAnInvoice = createAsyncThunk(
  "invoice/update-invoice",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await updateInvoice(payload);
      return response.data;
    } catch (error) {
      console.log(error);
      if (!error.response) {
        throw error;
      }
      rejectWithValue(error.response);
    }
  }
);

export const removeInvoice = createAsyncThunk(
  "invoice/remove-invoice",
  async (id) => await deleteInvoice(id)
);

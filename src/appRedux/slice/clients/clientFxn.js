import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createClient,
  getClients,
  updateClient,
  deleteClient,
} from "../../api/clients/index";

export const registerClient = createAsyncThunk(
  "client/create-client",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await createClient(payload);
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

export const getAllClients = createAsyncThunk(
  "client/get-clients",
  async () => {
    const response = await getClients();
    return response.data;
  }
);

export const updateAClient = createAsyncThunk(
  "client/update-client",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await updateClient(payload);
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

export const removeClient = createAsyncThunk(
  "client/remove-client",
  async (id) => await deleteClient(id)
);

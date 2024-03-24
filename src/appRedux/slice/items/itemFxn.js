import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createItem,
  getItems,
  updateItem,
  deleteItem,
} from "../../api/items/index";

export const registerItem = createAsyncThunk(
  "item/create-item",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await createItem(payload);
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

export const getAllItems = createAsyncThunk("items/get-items", async () => {
  const response = await getItems();
  return response.data;
});

export const updateAnItem = createAsyncThunk(
  "item/update-item",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await updateItem(payload);
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

export const removeItem = createAsyncThunk(
  "item/remove-item",
  async (id) => await deleteItem(id)
);

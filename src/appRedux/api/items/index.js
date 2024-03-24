import axios from "axios";
import "../root";

export const createItem = async (data) => await axios.post(`/item/`, data);

export const getItems = async () => await axios.get(`/item/`);

export const updateItem = async (data) =>
  await axios.patch(`/item/${data.id}`, data);

export const deleteItem = async (id) => await axios.delete(`/item/${id}`);

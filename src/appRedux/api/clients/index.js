import axios from "axios";
import "../root";

export const createClient = async (data) => await axios.post(`/client/`, data);

export const getClients = async () => await axios.get(`/client/`);

export const updateClient = async (data) =>
  await axios.patch(`/client/${data.id}`, data);

export const deleteClient = async (id) => await axios.delete(`/client/${id}`);

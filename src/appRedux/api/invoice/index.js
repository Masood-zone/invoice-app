import axios from "axios";
import "../root";

export const createInvoice = async (data) =>
  await axios.post(`/invoice/`, data);

export const getInvoices = async () => await axios.get(`/invoice/`);

export const updateInvoice = async (data) =>
  await axios.patch(`/invoice/${data.id}`, data);

export const deleteInvoice = async (id) => await axios.delete(`/invoice/${id}`);

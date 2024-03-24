import axios from "axios";
import "../root";

export const registerAdmin = async (data) => await axios.post(`/user`, data);

export const adminLogin = async (data) => await axios.post(`/user/login`, data);

export const adminList = async () => await axios.get(`/user/findMany`);

export const updateAdmin = async (data) =>
  await axios.patch(`/user/${data.id}`, data);

export const removeAdmin = async (id) => axios.delete(`/user/${id}`);

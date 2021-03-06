import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:5000/api/unidetails";

//const headers = { "x-auth-token": localStorage.token };
export const getUniDetails = async () => {
  return await axios.get(API_URL, { headers: authHeader() });
};

export const getUniDetailbyId = async (id) => {
  return await axios.get(API_URL + `/${id}`, { headers: authHeader() });
};

export const postUniDetails = async (data) => {
  return await axios.post(API_URL, data, { headers: authHeader() });
};

export const putUniDetails = async (_id, data) => {
  return await axios.put(API_URL + `/${_id}`, data, { headers: authHeader() });
};

export const deleteUniDetails = async (_id) => {
  return await axios.delete(API_URL + `/${_id}`, { headers: authHeader() });
};

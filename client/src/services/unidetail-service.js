import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:5000/api/unidetails";

//const headers = { "x-auth-token": localStorage.token };
export const getUniDetails = async () => {
  return axios.get(API_URL, { headers: authHeader() });
};

export const getUniDetailbyId = async (id) => {
  return axios.get(API_URL + `/${id}`, { headers: authHeader() });
};

export const postUniDetails = (data) => {
  return axios.post(API_URL, data, { headers: authHeader() });
};

export const putUniDetails = (_id, data) => {
  return axios.put(API_URL + `/${_id}`, data, { headers: authHeader() });
};

export const deleteUniDetails = (_id) => {
  return axios.delete(API_URL + `/${_id}`, { headers: authHeader() });
};

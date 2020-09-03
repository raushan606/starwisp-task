import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:5000/api/unidetails";

export const getUniDetails = () => {
  return axios.get(API_URL, { headers: authHeader() });
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

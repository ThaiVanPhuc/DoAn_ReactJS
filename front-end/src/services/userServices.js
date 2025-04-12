import axios from "axios";

const API_URL = "http://localhost:5000/api/users";

const authHeader = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export const getAllUsers = async () => {
  const res = await axios.get(API_URL, authHeader());
  return res.data;
};

export const deleteUser = async (id) => {
  const res = await axios.delete(`${API_URL}/${id}`, authHeader());
  return res.data;
};

export const createUser = async (userData) => {
  const res = await axios.post("http://localhost:5000/api/signup", userData);
  return res.data;
};

export const updateUser = async (id, userData) => {
  const res = await axios.put(`${API_URL}/${id}`, userData, authHeader());
  return res.data;
};

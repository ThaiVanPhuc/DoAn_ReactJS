import * as httpRequest from "../utils/httpRequest";

const authHeader = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export const getAllUsers = async () => {
  try {
    const respone = await httpRequest.get("api/users", authHeader());
    console.log(respone);
    return respone;
  } catch (error) {
    console.error("Error getallUsers", error);
    return [];
  }
};

export const deleteUser = async (id) => {
  const res = await httpRequest.del(`api/users/${id}`, authHeader());
  return res.data;
};

export const createUser = async (userData) => {
  const res = await httpRequest.post("api/signup", userData);
  return res.data;
};

export const updateUser = async (id, userData) => {
  const res = await httpRequest.put(`api/users/${id}`, userData, authHeader());
  return res.data;
};

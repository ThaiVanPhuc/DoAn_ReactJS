import axios from "axios";

const httpRequest = axios.create({
  baseURL: "http://localhost:5000/",
});

// GET
export const get = async (path, headers = {}) => {
  const response = await httpRequest.get(path, { headers });
  return response.data;
};

// POST
export const post = async (path, payload, { headers } = {}) => {
  try {
    const response = await httpRequest.post(path, payload, { headers });
    return response.data;
  } catch (error) {
    return new Error(`Error: ${error}`);
  }
};

// PUT
export const put = async (path, payload, { headers } = {}) => {
  try {
    const response = await httpRequest.put(path, payload, { headers });
    return response.data;
  } catch (error) {
    return new Error(`Error: ${error}`);
  }
};

// DELETE
export const del = async (path, { headers } = {}) => {
  try {
    const response = await httpRequest.delete(path, { headers });
    return response.data;
  } catch (error) {
    return new Error(`Error: ${error}`);
  }
};

export default httpRequest;

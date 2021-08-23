import axios from "axios";
import config from "../config/config";
const { apiUrl } = config;
const url = `${apiUrl}/pokemon`;

const findAll = async ({ limit = 10, offset = 0 }) => {
  const params = {
    limit,
    offset,
  };
  const response = await axios.get(url, { params });
  if (response.status === 200) {
    return response.data;
  } else {
    const err = new Error();
    err.name = response.statusText;
    err.status = response.status;
    throw err;
  }
};

const findById = async (id) => {
  const response = await axios.get(`${url}/${id}`);
  if (response.status === 200) {
    return response.data;
  } else {
    const err = new Error();
    err.name = response.statusText;
    err.status = response.status;
    throw err;
  }
};
const findByUrl = async (baseUrl) => {
  const response = await axios.get(baseUrl);
  if (response.status === 200) {
    return response.data;
  } else {
    const err = new Error();
    err.name = response.statusText;
    err.status = response.status;
    throw err;
  }
};
export { findAll, findById, findByUrl };

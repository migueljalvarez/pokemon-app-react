import axios from "axios";
import config from "../config/config";
const { apiUrl } = config;

const findAll = async ({ limit = 10, offset = 0 }) => {
  const url = `${apiUrl}/pokemon`;
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

export { findAll };

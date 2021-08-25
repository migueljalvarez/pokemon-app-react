import dotenv from "dotenv";
dotenv.config();

const { REACT_APP_API_URL } = process.env;

const config = {
  apiUrl: REACT_APP_API_URL,
};

export default config;

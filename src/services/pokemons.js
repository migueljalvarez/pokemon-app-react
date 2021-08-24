import axios from "axios";
import config from "../config/config";

const { apiUrl } = config;
const url = `${apiUrl}/pokemon`;
const graphUrl = "https://beta.pokeapi.co/graphql/v1beta";
const axiosConfig = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
};
const requestPokemons = (limit, offset, field, search) => {
  return `{
    results: pokemon_v2_pokemon(limit: ${limit}, offset: ${offset}, where: {${field}: {_regex: "${
    search ? search : ""
  }"} }, order_by: {${field}: asc}) {
      id
      name
    },
    currentSearchCount: pokemon_v2_pokemon_aggregate(where: {${field}: {_regex: "${
    search ? search : ""
  }"} }, order_by: {${field}: asc}) {
      items: aggregate{
        count(columns: id)
      }
  
    }
    count: pokemon_v2_pokemon_aggregate {
      items: aggregate {
        count(columns: id)
      }
    }
  }
  `;
};
const findAll = async ({ offset = 0, limit = 10, field = "name", search }) => {
  const data = {
    query: requestPokemons(limit, offset, field, search),
  };
  const response = await axios.post(graphUrl, data, axiosConfig);
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

export { findAll, findById };

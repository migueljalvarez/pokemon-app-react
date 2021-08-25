import axios from "axios";
import config from "../config/config";

const { apiUrl } = config;


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

const requestPokemonById = (id) => {
  return `{
    pokemon: pokemon_v2_pokemon(where: {id: {_eq: ${id}}, pokemon_v2_pokemonabilities: {pokemon_v2_ability: {name: {}}}}) {
      id
      name
      weight
      base_experience
      is_default
      types: pokemon_v2_pokemontypes{
        pokemon_id
        type: pokemon_v2_type{
          name
        }
      }
      abilities: pokemon_v2_pokemonabilities {
        id
        pokemon_id
        ability: pokemon_v2_ability {
          name
        }
      }
      stats: pokemon_v2_pokemonstats(where: {pokemon_id: {_eq: ${id}}, pokemon_v2_stat: {pokemon_v2_pokemonstats: {}}}) {
        id
        stat: pokemon_v2_stat {
          name
          itemValues: pokemon_v2_pokemonstats_aggregate(where: {pokemon_id: {_eq: 10}}) {
            nodes {
              id
              base_stat
            }
          }
        }
      }
    }
  }
  `;
};
const buildPokemonDto = async (pokemon) => {
  const types = pokemon.types.find((t) => t.pokemon_id === pokemon.id);
  const stats = {};
  pokemon.stats.map((s) => {
    const { nodes } = s.stat.itemValues;
    const name = s.stat.name;
    nodes.find((item) => Object.assign(stats, { [name]: item.base_stat }));
    return s;
  });

  const dto = {
    id: pokemon.id,
    name: pokemon.name,
    weight: pokemon.weight,
    baseExperience: pokemon.base_experience,
    isDefault: pokemon.is_default,
    type: types.type.name,
    abilities: pokemon.abilities.map((data) => data.ability.name),
    imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`,
    stats,
  };
  return dto;
};

const findAll = async ({ offset = 0, limit = 10, field = "name", search }) => {
  const data = {
    query: requestPokemons(limit, offset, field, search),
  };
  const response = await axios.post(apiUrl, data, axiosConfig);
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
  const body = {
    query: requestPokemonById(id),
  };
  const response = await axios.post(apiUrl, body, axiosConfig);
  if (response.status === 200) {
    const { data } = response.data;
    const { pokemon } = data;

    return await buildPokemonDto(pokemon.find((pok) => pok.id === id));
  } else {
    const err = new Error();
    err.name = response.statusText;
    err.status = response.status;
    throw err;
  }
};

export { findAll, findById };

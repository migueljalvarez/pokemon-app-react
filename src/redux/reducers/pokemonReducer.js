import { types } from "../types";

const initialState = {
  id: 0,
  name: "pokemon",
  base_experience: 0,
  height: 0,
  is_default: true,
  order: 0,
  weight: 0,
  abilities: [],
  forms: [],
  game_indices: [],
  location_area_encounters: "",
  moves: [],
  species: {},
  sprites: {},
  stats: [],
  types: [],
};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.pokemon:
      return action.payload;
    default:
      return state;
  }
};

const allInitialState = {
  results: [
    {
      name: "pokemon",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png",
    },
    {
      name: "pokemon",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png",
    },
    {
      name: "pokemon",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png",
    },
    {
      name: "pokemon",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png",
    },
    {
      name: "pokemon",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png",
    },
    {
      name: "pokemon",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png",
    },
    {
      name: "pokemon",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png",
    },
    {
      name: "pokemon",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png",
    },
    {
      name: "pokemon",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png",
    },
    {
      name: "pokemon",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png",
    },
  ],
};

const allPokemonsReducer = (state = allInitialState, action) => {
  switch (action.type) {
    case types.pokemons:
      return {
        ...state,
        results: action.payload.results,
        count: action.payload.count,
      };
    default:
      return state;
  }
};

export { pokemonReducer, allPokemonsReducer };

import { types } from "../types";

const initialState = {
  id: 0,
  name: "pokemon",
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
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png",
    },
    {
      name: "pokemon",
      imageUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png",
    },
    {
      name: "pokemon",
      imageUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png",
    },
    {
      name: "pokemon",
      imageUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png",
    },
    {
      name: "pokemon",
      imageUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png",
    },
    {
      name: "pokemon",
      imageUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png",
    },
    {
      name: "pokemon",
      imageUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png",
    },
    {
      name: "pokemon",
      imageUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png",
    },
    {
      name: "pokemon",
      imageUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png",
    },
    {
      name: "pokemon",
      imageUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png",
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
        currentSearchCount: action.payload.currentSearchCount
      };
    default:
      return state;
  }
};

export { pokemonReducer, allPokemonsReducer };

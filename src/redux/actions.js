import { types } from "./types";
import { firebase, google } from "../config/firebaseConfig";
import * as pokemon from "../services/pokemons";

export const loginGoogle = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(google)
      .then(({ user }) => {
        dispatch({
          type: types.login,
          payload: {
            id: user.uid,
            name: user.displayName,
            imageUrl: user.photoURL,
            isAuthenticated: true,
          },
        });
      });
  };
};

export const currentPokemon = (id) => {
  return (dispatch) => {
    pokemon
      .findById(id)
      .then((data) => {
        dispatch({
          type: types.pokemon,
          payload: {
            ...data,
            imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`,
          },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const allPokemons = (offset, limit) => {
  return (dispatch) => {
    pokemon
      .findAll({ offset, limit })
      .then((data) => {
        const { results, count } = data;
        results.map((pok) => {
          const pokemonId = pok.url.split("/")[6];
          const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`;
          pok.id = pokemonId;
          pok.imageUrl = imageUrl;
        });
        dispatch({
          type: types.pokemons,
          payload: {
            results,
            count,
          },
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

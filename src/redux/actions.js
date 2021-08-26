import { types } from "./types";
import { firebase, google, facebook } from "../config/firebaseConfig";
import * as pokemon from "../services/pokemons";

export const login = (user) => {
  return {
    type: types.login,
    payload: {
      id: user.uid,
      name: user.displayName,
      imageUrl: user.photoURL,
      isAuthenticated: true,
    },
  };
};

export const logout = ()=>{
  return (dispatch)=>{
    firebase.auth().signOut().then(()=>{
      dispatch({
        type: types.logout
      })
    }).catch((err)=>{
      console.log(err)
    })
  }
}

export const loginGoogle = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(google)
      .then(({ user }) => {
        dispatch(login(user));
      });
  };
};

export const loginFacebook = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(facebook)
      .then(({ user }) => {
        dispatch(login(user));
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
          },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const allPokemons = (offset, limit, field, search) => {
  return (dispatch) => {
    pokemon
      .findAll({ offset, limit, field, search })
      .then((result) => {
        const { results, count, currentSearchCount } = result.data;

        results.map(
          (pok) =>
            (pok.imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pok.id}.png`)
        );

        dispatch({
          type: types.pokemons,
          payload: {
            results,
            count: count.items.count,
            currentSearchCount: currentSearchCount.items.count,
          },
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

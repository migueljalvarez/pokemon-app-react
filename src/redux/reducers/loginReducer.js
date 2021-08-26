import { types } from "../types";

const initialState = {
  id: 0,
  name: "anonymous",
  isAuthenticated: false,
  imageUrl:
    "https://imagenpng.com/wp-content/uploads/2016/09/Pokebola-pokeball-png-2.png",
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.login:
      return {
        id: action.payload.id,
        name: action.payload.name,
        imageUrl: action.payload.imageUrl,
        isAuthenticated: action.payload.isAuthenticated,
      };
    case types.logout:
      return {
        id: initialState.id,
        name: initialState.name,
        imageUrl: initialState.imageUrl,
        isAuthenticate: false,
      };
    default:
      return state;
  }
};

export { loginReducer, initialState };

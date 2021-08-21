import { types } from "../types";

const initialState = {
  isAuthenticated: false,
  imageUrl:
    "https://c0.klipartz.com/pngpicture/24/650/gratis-png-iconos-de-computadora-servicio-avatar-usuario-casa-de-huespedes-idioma-gaulish-thumbnail.png",
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

    default:
      return state;
  }
};

export { loginReducer };

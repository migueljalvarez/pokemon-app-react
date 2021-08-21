import { types } from "./types";
import { firebase, google } from "../config/firebaseConfig";

const loginGoogle = () => {
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
            isAuthenticated: true
          },
        });
      });
  };
};

export { loginGoogle };

import { store } from "./reducer";
import {
  SET_ACCESS_TOKEN,
  SET_CURRENT_USER,
  SET_MENU_OPEN,
} from "./reduxConstants";

const actions = {
  setMenuOpen: (value) => {
    store.dispatch({ type: SET_MENU_OPEN, payload: value });
  },
  getMenuOpen: () => {
    return store.getState().menuOpen;
  },
  setAccessToken: (token) => {
    store.dispatch({ type: SET_ACCESS_TOKEN, payload: token });
  },
  getAccessToken: () => {
    return store.getState().accessToken;
  },
  setCurrentUser: (obj) => {
    store.dispatch({ type: SET_CURRENT_USER, payload: obj });
  },
  getCurrentUser: () => {
    return store.getState().currentUser;
  },
};

const reduxActions = Object.assign({}, actions);

export default reduxActions;

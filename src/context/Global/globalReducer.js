import { SET_LOADING, SET_DATA, CLEAR_DATA, SET_DESTINATIONS } from "../types";

const globalReducer = (state, action) => {
  console.log(
    "🚀 ~ file: GlobalReducer.js ~ line 4 ~ globalReducer ~ action",
    action
  );
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case SET_DESTINATIONS:
      return {
        ...state,
        destinations: action.payload,
      };
    case SET_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case CLEAR_DATA:
      localStorage.removeItem("data");
      return {
        ...state,
        data: null,
      };
    default:
      return state;
  }
};

export default globalReducer;

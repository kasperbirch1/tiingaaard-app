import { SET_LOADING, SET_DATA, CLEAR_DATA } from "../types";

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
    case SET_DATA:
      localStorage.setItem("data", JSON.stringify(action.payload));
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

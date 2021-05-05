import React, { useReducer } from "react";
import axios from "axios";
import GlobalContext from "./globalContext";
import globalReducer from "./globalReducer";

import { SET_LOADING, SET_DATA, CLEAR_DATA, SET_DESTINATIONS } from "../types";

const GlobalState = (props) => {
  const initialState = {
    destinations: null,
    data: JSON.parse(localStorage.getItem("data")),
    loading: false,
  };

  const [state, dispatch] = useReducer(globalReducer, initialState);

  const setFormData = (data) => {
    dispatch({
      type: SET_DATA,
      payload: data,
    });
  };

  const fetchDestinations = async () => {
    try {
      dispatch({
        type: SET_LOADING,
        payload: true,
      });

      const token = await axios.get(
        "https://thinggaard.dk/wp-json/thinggaard/v1/authentication"
      );

      if (token?.data?.result?.auth_token) {
        const response = await axios.get(
          `https://thinggaard.dk/wp-json/thinggaard/v1/destinations?token=${token?.data?.result?.auth_token}`
        );

        dispatch({
          type: SET_DESTINATIONS,
          payload: response.data.result,
        });
        dispatch({
          type: SET_LOADING,
          payload: false,
        });
      }
    } catch (error) {
      console.log("fetchDestinations-error:", error);
      dispatch({
        type: SET_LOADING,
        payload: false,
      });
    }
  };

  const clearData = () => {
    dispatch({ type: CLEAR_DATA });
  };

  return (
    <GlobalContext.Provider
      value={{
        loading: state.loading,
        data: state.data,
        destinations: state.destinations,
        clearData,
        setFormData,
        fetchDestinations,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;

import React, { useReducer } from "react";
import axios from "axios";

import GlobalContext from "./globalContext";
import globalReducer from "./globalReducer";

import { SET_LOADING, SET_DATA, CLEAR_DATA } from "../types";

const GlobalState = (props) => {
  const initialState = {
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

  const fetchData = async () => {
    try {
      dispatch({
        type: SET_LOADING,
        payload: true,
      });
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      dispatch({
        type: SET_DATA,
        payload: response.data,
      });
      dispatch({
        type: SET_LOADING,
        payload: false,
      });
    } catch (error) {
      alert(error);
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
        fetchData,
        clearData,
        setFormData,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;

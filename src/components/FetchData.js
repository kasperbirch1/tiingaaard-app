import React from "react";
import { useContext } from "react";
import globalContext from "../context/Global/globalContext";

const FetchData = () => {
  const { fetchData, loading, data, clearData } = useContext(globalContext);
  return (
    <>
      <button onClick={fetchData}>fetchData</button>
      <button onClick={clearData}>clearData</button>
      {loading ? (
        <span>Loading...</span>
      ) : (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
    </>
  );
};

export default FetchData;

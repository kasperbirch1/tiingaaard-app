import React, { useContext } from "react";
import globalContext from "../context/Global/globalContext";

const Hotels = () => {
  const { data } = useContext(globalContext);

  return (
    <div>
      <h1>hotels</h1>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};

export default Hotels;

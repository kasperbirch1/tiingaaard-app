import React, { useContext, useEffect, useState } from "react";
import globalContext from "../context/Global/globalContext";

const TestNav = () => {
  const {
    fetchDestinations,
    destinations,
    destination,
    setDestination,
  } = useContext(globalContext);

  useEffect(() => {
    fetchDestinations();
  }, []);

  return (
    <>
      destination:
      <pre>{JSON.stringify(destination, null, 2)}</pre>
      <form>
        {destinations && (
          <select
            value={destination}
            onChange={(e) => {
              setDestination(e.target.value);
            }}
          >
            {destinations?.map((item, index) => (
              <option key={index} value={item.code}>
                {item.name}
              </option>
            ))}
          </select>
        )}
      </form>
    </>
  );
};

export default TestNav;

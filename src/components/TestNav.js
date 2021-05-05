import React, { useContext, useEffect, useState } from "react";
import globalContext from "../context/Global/globalContext";

const TestNav = () => {
  const { fetchDestinations, destinations } = useContext(globalContext);

  const [value, setvalue] = useState("");

  useEffect(() => {
    fetchDestinations();
  }, []);

  return (
    <>
      value:
      <pre>{JSON.stringify(value, null, 2)}</pre>
      <form>
        {destinations && (
          <select
            value={value}
            onChange={(e) => {
              setvalue(e.target.value);
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
      fetchDestinations:
      <pre>{JSON.stringify(destinations, null, 2)}</pre>
    </>
  );
};

export default TestNav;

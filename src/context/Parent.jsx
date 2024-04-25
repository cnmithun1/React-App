import React, { useState } from "react";
import { MyContext } from "./MyContext";
import Child from "./Child";

const Parent = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      <div>Parent</div>
      <button
        onClick={() => {
          increment();
        }}
      >
        Click
      </button>
      <MyContext.Provider value={counter}>
        <Child />
      </MyContext.Provider>
    </div>
  );
};

export default Parent;

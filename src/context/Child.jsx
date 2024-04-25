import React, { useContext } from "react";
import { MyContext } from "./MyContext";

const Child = () => {
  const sample = useContext(MyContext);

  return (
    <div>
      <div>Child</div>
      <div>{sample}</div>
    </div>
  );
};

export default Child;

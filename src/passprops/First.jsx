import React from "react";
import Second from "./Second";

const First = () => {
  const callback = (value) => {
    return <div>{value}</div>;
  };

  return (
    <div>
      <div>First</div>
      <Second fromParent={"Value from parent"} fromChild={callback} />
    </div>
  );
};

export default First;

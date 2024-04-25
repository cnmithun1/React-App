import React from "react";

const Second = (props) => {
  return (
    <div>
      <div>Second</div>
      <div>{props.fromParent}</div>
      <div>{props.fromChild("Value from child")}</div>
    </div>
  );
};

export default Second;

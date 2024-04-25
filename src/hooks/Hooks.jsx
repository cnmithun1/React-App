import React, { useRef } from "react";

const Hooks = () => {
  const count = useRef("Hello use Ref");

  const inputRef = useRef();

  const handleClick = () => {
    // Access the current value directly from the DOM
    alert(`Input Value: ${inputRef.current.value}`);
  };

  return (
    <div>
      <div>Hooks</div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Get Value</button>
    </div>
  );
};

export default Hooks;

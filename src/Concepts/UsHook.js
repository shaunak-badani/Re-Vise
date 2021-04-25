import React, { useState } from "react";

const UsHook = (props) => {
  const [title, setTitle] = useState("Mary");

  const clickHandler = () => {
    setTitle("Hairy");
  };
  return (
    <div>
      <h2>{title}</h2>
      <button onClick={clickHandler}> Change Name </button>
    </div>
  );
};

export default UsHook;

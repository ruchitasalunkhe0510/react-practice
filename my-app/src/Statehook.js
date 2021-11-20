import React, { useState } from "react";

function Statehook() {
  const [value, setValue] = useState(0);
  function handleClick() {
    setValue(value + 1);
    console.log("clicked");
  }
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default Statehook;

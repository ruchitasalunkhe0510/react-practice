import React from "react";

function Button({ handleClick, children }) {
  console.log("click");
  return (
    <div>
      <button onClick={handleClick}>{children}</button>
    </div>
  );
}

export default Button;

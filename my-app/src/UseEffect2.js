import React, { useEffect, useState } from "react";

function UseEffect2() {
  const [widthCount, setWidthCount] = useState(window.screen.width);
  const actualWindth = () => {
    console.log(widthCount);
    setWidthCount(window.innerWidth);
  };
  useEffect(() => {
    console.log("add");
    window.addEventListener("resize", actualWindth);
    return () => {
      console.log("remove");
      window.removeEventListener("resize", actualWindth);
    };
  });
  return (
    <div>
      <p>window size:</p>
      <h1>{widthCount}</h1>
    </div>
  );
}

export default UseEffect2;

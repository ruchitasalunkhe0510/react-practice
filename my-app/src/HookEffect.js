import React, { useState } from "react";

function HookEffect() {
  const [num, setNum] = useState(0);
  return (
    <div>
      <h1>hook</h1>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        Cilck Me {num}
      </button>
    </div>
  );
}

export default HookEffect;

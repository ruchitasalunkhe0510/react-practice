import React, { useEffect, useState } from "react";

function UseEffectfun() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(count);
    document.title = `You clicked ${count} times`;
  });
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>click {count} time</button>
    </div>
  );
}

export default UseEffectfun;

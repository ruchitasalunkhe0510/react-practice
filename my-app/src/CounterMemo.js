import React, { useState } from "react";

function CounterMemo() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => {
    setCounterOne(counterOne + 1);
  };
  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1);
  };
  return (
    <div>
      <div>
        <button onClick={incrementOne}>counter One: {counterOne}</button>
      </div>
      <div>
        <button onClick={incrementTwo}>Counter Two: {counterTwo}</button>
      </div>
    </div>
  );
}

export default CounterMemo;

import React, { useState } from "react";
import Count from "./Count";
import Title from "./Title";
import Button from "./Button";

function ParentComponent() {
  const [age, setAge] = useState();
  const [salary, setSalary] = useState(10000);
  const incrementAge = () => {
    setAge(age + 1);
  };
  const incrementSalary = () => {
    setSalary(salary + 5000);
  };
  return (
    <div>
      <Title />
      <Count text="Age" count={age} />
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Count text="Salary" count={salary} />
      <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  );
}

export default ParentComponent;

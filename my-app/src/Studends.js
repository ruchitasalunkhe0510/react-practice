import React from "react";

function Studends(props) {
  return (
    <div style={{ backgroundColor: "skyblue" }}>
      <h1>hello {props.name}</h1>
      <h2>Email: {props.email}</h2>
    </div>
  );
}

export default Studends;

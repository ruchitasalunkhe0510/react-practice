import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  function handleSubmit() {
    setEmail();
    console.log("login");
  }
  return (
    <div>
      <h1>Login From</h1>
      <input name="email" type="email" placeholder="email..." value={email} />
      <input
        name="password"
        type="password"
        placeholder="password..."
        value={password}
      />
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
}

export default Login;

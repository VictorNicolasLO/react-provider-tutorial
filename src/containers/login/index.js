import React, { useState } from "react";
import { useAuthProvider } from "../../providers/auth-provider/auth-provider-v2";

function Login() {
  const { login } = useAuthProvider();
  const [username, setUser] = useState("");
  const [password, setPasowrd] = useState("");

  const handleLogin = () => login(username, password);

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        onInput={(e) => setUser(e.target.value)}
        value={username}
        placeholder={"Username"}
      />
      <input
        onInput={(e) => setPasowrd(e.target.value)}
        value={password}
        type="password"
        placeholder={"Password"}
      />
      <button onClick={handleLogin}>Login</button>
    </form>
  );
}

export default Login;

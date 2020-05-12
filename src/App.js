import React from "react";
import "./App.css";
import { useAuthProvider } from "./providers/auth-provider/auth-provider-v2";
import Home from "./containers/home";
import Login from "./containers/login";

function App() {
  const { isAuth, loading } = useAuthProvider();
  if (loading) return <div>Loading</div>;
  return <div className="App">{isAuth ? <Home /> : <Login />}</div>;
}

export default App;

import React from "react";
import { useAuthProvider } from "../../providers/auth-provider/auth-provider-v2";

function Home() {
  const { username } = useAuthProvider();
  return <div>{username}</div>;
}

export default Home;

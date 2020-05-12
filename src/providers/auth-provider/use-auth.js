import { useState } from "react";

function useAuth() {
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState(undefined);

  async function login(user, password) {
    setLoading(true);

    // Wait and run login logic
    await new Promise((resolve) => setTimeout(resolve, 500));

    setUsername(user);
    setIsAuth(true);
    setLoading(false);
  }

  return {
    login,
    isAuth,
    loading,
    username,
  };
}

export default useAuth;

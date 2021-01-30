import { useCallback, useEffect, useState } from "react";
import { useHttp } from "./http.hook";

export const useAuth = () => {
  const [ready, setReady] = useState(false);
  const [token, setToken] = useState(null);
  const { request } = useHttp();

  const storageName = "_profiler";

  const login = useCallback((jwtToken) => {
    setToken(jwtToken);

    localStorage.setItem(
      storageName,
      JSON.stringify({
        token: jwtToken,
      }),
    );
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    localStorage.removeItem(storageName);
  }, []);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName));
    if (data && data.token) {
      login(data.token);
    }
    setReady(true);
  }, [login]);

  return { login, logout, token, ready };
};

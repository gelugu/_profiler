import { createContext } from "react";

export const AuthContext = createContext({
  login: () => {},
  logout: () => {},
  token: null,
  isAuthenticated: false,
});

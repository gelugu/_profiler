import React from "react";
import { BrowserRouter } from "react-router-dom";

import { useRoutes } from "./routes";
import { useAuth } from "./hooks/auth.hook";

import { AuthContext } from "./context/AuthContext";

import { Navbar } from "./components/Navbar";
import { Loader } from "./components/Loader";

function App() {
  const { login, logout, token, ready } = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);

  return (
    <AuthContext.Provider value={{ login, logout, token, isAuthenticated }}>
      <BrowserRouter>
        {isAuthenticated && <Navbar />}
        {ready ? <>{routes}</> : <Loader />}
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;

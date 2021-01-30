import React, { useCallback, useContext, useEffect, useRef, useState } from "react";

import { useHttp } from "../hooks/http.hook";

import { AuthContext } from "../context/AuthContext";

import "./Auth.css";
import { useAuth } from "../hooks/auth.hook";

export const Auth = () => {
  const [password, setPassword] = useState("");
  const { request } = useHttp();
  const { token } = useAuth();
  const { login } = useContext(AuthContext);
  const inputRef = useRef();

  useEffect(() => {
    if (!token)
      request("/telegram/sendpassword");
  }, [request, token]);

  const loginHandler = useCallback( async () => {
    try {
      const { token } = await request(`/auth/${password}`, "POST", {});
      if (token) {
        login(token);
      }
    } catch (error) {
      console.error("loginHandler error", error);
    }
  }, [login, password, request]);

  useEffect(() => {
    if (password.length === 4) loginHandler();
  }, [password, loginHandler]);

  const changeHandler = ({ target }) => {
    setPassword(target.value);
  };

  return (
    <div className="auth-container">
      <input
        className="auth-input"
        placeholder="_profiler"
        ref={inputRef}
        onFocus={() => {inputRef.current.placeholder = ""}}
        onBlur={() => {inputRef.current.placeholder = "_profiler"}}
        id="password"
        type="tel"
        autoComplete="false"
        name="password"
        defaultValue=""
        value={password}
        onChange={changeHandler}
      />
    </div>
  );
};

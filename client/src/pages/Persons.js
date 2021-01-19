import React, { useCallback, useContext, useEffect, useState } from "react";
import { useHttp } from "../hooks/http.hook";
import { AuthContext } from "../context/AuthContext";
import { Loader } from "../components/Loader";
import { PersonsList } from "../components/PersonsList";

export const Persons = () => {
  const [persons, setPersons] = useState();
  const { loading, request } = useHttp();
  const { token } = useContext(AuthContext);

  const fetchLinks = useCallback(async () => {
    try {
      const fetched = await request("/persons", "GET", null, {
        Authorization: `Bearer ${token}`,
      });
      setPersons(fetched);
    } catch (error) {}
  }, [token, request]);

  useEffect(() => {
    fetchLinks();
  }, [fetchLinks]);

  return <div>{loading ? <Loader /> : <PersonsList persons={persons} />}</div>;
};

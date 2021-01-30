import React, { useCallback, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useHttp } from "../hooks/http.hook";
import { Loader } from "../components/Loader";
import { PersonFile } from "../components/PersonFile";

export const Person = () => {
  const { token } = useContext(AuthContext);
  const { request, loading } = useHttp();
  const [person, setPerson] = useState(null);
  const personId = useParams().id;

  const getPerson = useCallback(async () => {
    try {
      const fetched = await request(`/api/persons/${personId}`, "GET", null, {
        Authorization: `Bearer ${token}`,
      });
      setPerson(fetched);
    } catch (error) {}
  }, [token, personId, request]);

  useEffect(() => {
    getPerson();
  }, [getPerson]);

  if (loading) return <Loader />;

  return <>{!loading && person && <PersonFile person={person} />}</>;
};

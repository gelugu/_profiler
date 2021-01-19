import React from "react";
import { PersonCard } from "./PersonCard";

import "./PersonsList.css";

export const PersonsList = ({ persons }) => {
  if (!persons || persons.length === 0) return <p className="pl-container">No profiles</p>;
  return (
    <div className="pl-container">
      {persons.map((p) => {
        return <PersonCard key={p._id} person={p} />;
      })}
    </div>
  );
};

import React from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "./PersonCard.css";

export const PersonCard = ({ person }) => {
  const history = useHistory();
  return (
    <div className="pc-container" onClick={() => {
      history.push(`/person/${person._id}`);
    }}>
      {/* {person && person.avatar} */}
      <h2>{`${person.firstName} ${person.lastName}`}</h2>

      <Link className="pc-details" to={`person/${person._id}`}>Details</Link>
    </div>
  );
};

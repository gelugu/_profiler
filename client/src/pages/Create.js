import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useHttp } from "../hooks/http.hook";

import "./../components/PersonFile.css";

export const Create = () => {
  const history = useHistory();
  const { token } = useContext(AuthContext);
  const { request } = useHttp();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    birthday: 0,
    additional: "",
  });

  // const avatarRef = useRef(null);

  useEffect(() => {}, []);

  const pressHandler = async () => {
    for (let i = 0; i < Object.values(form).length; i++) {
      if (Object.values(form)[i]) break;
      return;
    }
    try {
      const { _id } = await request(
        "/persons",
        "POST",
        {
          ...form,
        },
        { Authorization: `Bearer ${token}` }
      );
      history.push(`/person/${_id}`);
    } catch (error) {}
  };

  return (
    <div className="pf-container">
      <div className="pf-main">
        <div className="pf-main-inputs">
          <input
            className="pf-input pf-name"
            placeholder="first name"
            type="text"
            value={form.firstName}
            onChange={({ target }) => {
              setForm({
                ...form,
                firstName: target.value,
              });
            }}
          />
          <input
            className="pf-input pf-name"
            placeholder="last name"
            type="text"
            value={form.lastName}
            onChange={({ target }) => {
              setForm({
                ...form,
                lastName: target.value,
              });
            }}
          />
          <input
            className="pf-input pf-birthday"
            type="date"
            defaultValue={new Date().toISOString().substr(0, 10)}
            onChange={({ target }) => {
              if (target.valueAsDate === null) return;
              setForm({
                ...form,
                birthday: target.valueAsDate.getTime(),
              });
            }}
          />
          <div></div>
        </div>
      </div>
      <textarea
        className="pf-additional"
        value={form.additional}
        onKeyDown={(e) => {
          console.log(e.key);
          if (e.ctrlKey && e.key === "Enter") pressHandler();
        }}
        onChange={({ target }) => {
          setForm({ ...form, additional: target.value });
        }}
        placeholder="additional info..."
      />
      <button className="pf-submit" onClick={pressHandler}>
        Save
      </button>
    </div>
  );
};

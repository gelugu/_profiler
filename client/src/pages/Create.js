import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useHttp } from "../hooks/http.hook";

import "./Create.css";

export const Create = () => {
  const history = useHistory();
  const { token } = useContext(AuthContext);
  const { request } = useHttp();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    nickName: "",
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
        { Authorization: `Bearer ${token}` },
      );
      history.push(`/person/${_id}`);
    } catch (error) {}
  };

  return (
    <div className="c-container">
      <div className="c-main">
        <div className="c-main-inputs">
          <input
            className="c-input c-name"
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
            className="c-input c-name"
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
            className="c-input c-nick"
            placeholder="nick name"
            type="text"
            value={form.nickName}
            onChange={({ target }) => {
              setForm({
                ...form,
                nickName: target.value,
              });
            }}
          />
          <input
            className="c-input c-birthday"
            type="date"
            defaultValue={new Date().toISOString().substr(0, 10)}
            onChange={({ target }) => {
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
        className="c-additional"
        value={form.additional}
        onChange={({ target }) => {
          setForm({ ...form, additional: target.value });
        }}
        placeholder="additional info..."
      />
      <button className="c-submit" onClick={pressHandler}>
        Save
      </button>
    </div>
  );
};

import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useHttp } from "../hooks/http.hook";

import "./PersonFile.css";

export const PersonFile = ({ person }) => {
  const history = useHistory();
  const { token } = useContext(AuthContext);
  const { request } = useHttp();
  const [form, setForm] = useState(person);
  const [isEdit, setIsEdit] = useState(false);

  const pressHandler = async () => {
    if (isEdit) {
      try {
        await request(
          `/persons/${form._id}`,
          "PUT",
          {
            ...form,
          },
          { Authorization: `Bearer ${token}` },
        );
        // success notification
        setIsEdit(false);
      } catch (error) {}
    } else {
      setIsEdit(true);
    }
  };

  const deleteHandler = async () => {
    try {
      await request(
        `/persons/${form._id}`,
        "DELETE",
        {
          ...form,
        },
        { Authorization: `Bearer ${token}` },
      );
      // success notification
      history.replace(`/persons`);
    } catch (error) {}
  }

  return (
    <div className="pf-container">
      <div className="pf-main">
        <div className="pf-main-inputs">
          <input
            className="pf-input pf-name"
            placeholder="first name"
            type="text"
            readOnly={!isEdit}
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
            readOnly={!isEdit}
            value={form.lastName}
            onChange={({ target }) => {
              setForm({
                ...form,
                lastName: target.value,
              });
            }}
          />
          <input
            className="pf-input pf-nick"
            placeholder="nick name"
            type="text"
            readOnly={!isEdit}
            value={form.nickName}
            onChange={({ target }) => {
              setForm({
                ...form,
                nickName: target.value,
              });
            }}
          />
          <input
            className="pf-input pf-birthday"
            type="date"
            defaultValue={new Date(form.birthday).toISOString().substr(0, 10)}
            readOnly={!isEdit}
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
        className={`pf-additional ${isEdit ? "pf-add-focus" : ""}`}
        value={form.additional}
        readOnly={!isEdit}
        onChange={({ target }) => {
          setForm({ ...form, additional: target.value });
        }}
        placeholder="additional info..."
      />
      <div className="pf-buttons">
      <button className="pf-submit" onClick={pressHandler}>
        {isEdit ? "Save" : "Edit"}
      </button>
      <button className="pf-delete" onClick={deleteHandler}>
        delete
      </button>
      </div>
    </div>
  );
};

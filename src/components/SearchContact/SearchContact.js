import React from "react";
import s from "./SearchContact.module.css";
import { useDispatch } from "react-redux";
import { filter } from "../../redux/slices/filter";

export default function SearchContact() {
  const dispatch = useDispatch();
  return (
    <label>
      <title className={s.title}>Find contacts by name</title>
      <input
        type="text"
        onChange={(evt) =>
          dispatch(filter(evt.currentTarget.value.toLocaleLowerCase()))
        }
      />
    </label>
  );
}

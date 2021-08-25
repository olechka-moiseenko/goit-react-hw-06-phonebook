import React, { useEffect } from "react";
import s from "./ContactList.module.css";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../redux/slices/items";

export default function ContactList() {
  const contacts = useSelector((state) => state.items);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const filteredContactList = contacts.filter((contacts) =>
    contacts.name.toLocaleLowerCase().includes(filter)
  );

  useEffect(() => {
    localStorage.setItem("contactsList", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <ul className={s.contactList}>
      {filteredContactList.map((user) => (
        <li key={user.id} className={s.contactitem}>
          <span>
            {user.name} {user.number}
          </span>
          <button
            type="button"
            className={s.btn}
            onClick={() => dispatch(actions.deleteContact(user.id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

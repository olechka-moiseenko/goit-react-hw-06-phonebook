import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/slices/items";
import s from "./ContactForm.module.css";
import { v4 as uuidv4 } from "uuid";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const dispatch = useDispatch();

  const handleSetInfo = (e) => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;
      case "number":
        setNumber(e.target.value);
        break;

      default:
        return;
    }
  };

  const handleAddContact = (e) => {
    e.preventDefault();
    const id = uuidv4();
    dispatch(addContact({ name, number, id }));

    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <form onSubmit={handleAddContact} className={s.form}>
      <label className={s.label}>
        <p>Name</p>
        <input
          className={s.input}
          autoComplete="off"
          onChange={handleSetInfo}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
      <label className={s.label}>
        <p>Number</p>
        <input
          className={s.input}
          autoComplete="off"
          onChange={handleSetInfo}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>
      <button type="submit" className={s.btn}>
        Add contact
      </button>
    </form>
  );
}

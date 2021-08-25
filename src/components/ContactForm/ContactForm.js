import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/slices/items";
import s from "./ContactForm.module.css";
import { v4 as uuidv4 } from "uuid";

export default function ContactForm() {
  const dispatch = useDispatch();
  const allContacts = useSelector((state) => state.contactsSlice);

  const handleAddContact = (evt) => {
    evt.preventDefault();

    if (
      allContacts.some(
        (contact) => contact.name === evt.target.elements.inputName.value
      )
    ) {
      alert(`${evt.target.elements.inputName.value} is already in contacts`);
    } else {
      dispatch(
        addContact({
          name: evt.target.elements.inputName.value,
          number: evt.target.elements.inputNumber.value,
          id: uuidv4(),
        })
      );
    }

    evt.target.reset();
  };

  const numberInputId = uuidv4();
  const nameInputId = uuidv4();

  return (
    <form onSubmit={handleAddContact} className={s.form}>
      <label className={s.label}>
        <p>Name</p>
        <input
          className={s.input}
          autoComplete="off"
          name="inputName"
          type="text"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          id={nameInputId}
        />
      </label>
      <label className={s.label}>
        <p>Number</p>
        <input
          className={s.input}
          autoComplete="off"
          type="tel"
          name="inputNumber"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          id={numberInputId}
        />
      </label>
      <button type="submit" className={s.btn}>
        Add contact
      </button>
    </form>
  );
}

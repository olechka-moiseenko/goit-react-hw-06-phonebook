import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import s from "./App.module.css";
import ContactForm from "./components/ContactForm/ContactForm.js";
import ContactList from "./components/ContactList/ContactList.js";
import SearchContact from "./components/SearchContact/SearchContact.js";

export default function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem("contactList")) ?? []
  );
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contactList", JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = ({ name, number }) => {
    const contact = { name, number, id: uuidv4() };
    contacts.find((savedContact) => savedContact.name === name)
      ? alert(`${name} is already in contacts`)
      : setContacts((prevContacts) => [...prevContacts, contact]);
  };

  const handleDelete = (contactId) => {
    setContacts(contacts.filter((contact) => contact.id !== contactId));
  };

  const changeFilter = (e) => {
    setFilter(e.target.value);
  };

  const normaliseFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(normaliseFilter)
  );

  return (
    <div className={s.container}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm handleSubmit={formSubmitHandler} />

      <h2>Contacts</h2>
      <SearchContact value={filter} inputChange={changeFilter} />
      <ContactList contacts={filteredContacts} handleDelete={handleDelete} />
    </div>
  );
}

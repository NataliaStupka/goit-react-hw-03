import { useEffect, useState } from "react";

import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";

import initialContacts from "../assets/contacts.json";

function App() {
  const [contacts, setContacts] = useState(
    // (*2)якщо в localStorage є 'contacts' рендеремо його, як ні то початкові
    () => JSON.parse(localStorage.getItem("contacts")) ?? initialContacts
  );
  const [filter, setFilter] = useState("");
  //(*1) зберігаємо в localStorage
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  //приймає новий контакт values
  const addContact = (newContact) => {
    console.log("Створює новий контакт:", newContact);
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  //search
  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  //

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAdd={addContact} />
        <SearchBox value={filter} onFilter={setFilter} />
        <ContactList contacts={visibleContacts} onDelete={deleteContact} />
      </div>
    </>
  );
}

export default App;

// pages/contacts/index.js
import { useState, useEffect } from 'react';

export default function Contacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    const res = await fetch('/api/contacts');
    const data = await res.json();
    setContacts(data.contacts);
  };

  return (
    <div>
      <h1>Your Contacts</h1>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.name} - {contact.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

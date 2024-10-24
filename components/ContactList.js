// components/ContactList.j// components/ContactList.js
import axios from 'axios';
import { useEffect, useState } from 'react';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    try {
      const response = await axios.get('/api/contacts');
      setContacts(response.data);
    } catch (error) {
      console.error(error); // Handle error
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name} - {contact.email}
          {/* Add edit and delete functionality here */}
        </li>
      ))}
    </ul>
  );
};

export default ContactList;


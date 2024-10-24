// components/ContactForm.js
// components/ContactForm.js
import { useState } from 'react';
import axios from 'axios';

const ContactForm = ({ contact }) => {
  const [name, setName] = useState(contact ? contact.name : '');
  const [email, setEmail] = useState(contact ? contact.email : '');
  const [phone, setPhone] = useState(contact ? contact.phone : '');
  const [address, setAddress] = useState(contact ? contact.address : '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = contact ? `/api/contacts/update` : `/api/contacts/add`;
    
    try {
      const response = await axios.post(url, { name, email, phone, address });
      console.log(response.data); // Handle response
    } catch (error) {
      console.error(error); // Handle error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Name" 
        required 
      />
      <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="Email" 
        required 
      />
      <input 
        type="tel" 
        value={phone} 
        onChange={(e) => setPhone(e.target.value)} 
        placeholder="Phone" 
        required 
      />
      <input 
        type="text" 
        value={address} 
        onChange={(e) => setAddress(e.target.value)} 
        placeholder="Address" 
      />
      <button type="submit">{contact ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default ContactForm;


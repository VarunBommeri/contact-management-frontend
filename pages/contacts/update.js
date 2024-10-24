// pages/contacts/edit.js
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function EditContact() {
  const [contact, setContact] = useState({ name: '', email: '', phone: '' });
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      fetchContact(id);
    }
  }, [id]);

  const fetchContact = async (id) => {
    const res = await fetch(`/api/contacts/${id}`);
    const data = await res.json();
    setContact(data.contact);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`/api/contacts/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(contact),
    });

    if (res.ok) {
      router.push('/contacts');
    } else {
      alert('Update failed');
    }
  };

  return (
    <div>
      <h1>Edit Contact</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={contact.name}
          onChange={(e) => setContact({ ...contact, name: e.target.value })}
          placeholder="Name"
        />
        <input
          type="email"
          value={contact.email}
          onChange={(e) => setContact({ ...contact, email: e.target.value })}
          placeholder="Email"
        />
        <input
          type="text"
          value={contact.phone}
          onChange={(e) => setContact({ ...contact, phone: e.target.value })}
          placeholder="Phone"
        />
        <button type="submit">Update Contact</button>
      </form>
    </div>
  );
}

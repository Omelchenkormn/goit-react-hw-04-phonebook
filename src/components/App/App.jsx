import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid/non-secure';
import { Container } from './App.styled';
import { Apps } from './App.styled';
import ContactForm from 'components/Form/Form';
import { ContactList } from 'components/Contacts/Contact';
import { Filter } from 'components/FilterContact/Filter';

export const App = () => {
  const [contacts, setcontacts] = useState(
    JSON.parse(window.localStorage.getItem('contacts')) ?? [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
  );
  const [filter, setfilter] = useState('');

  const addContact = (name, number) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    if (contacts.find(contact => contact.name === newContact.name)) {
      alert(`${newContact.name} is already in contacs`);
    } else {
      setcontacts([newContact, ...contacts]);
    }
  };

  const changeFilter = event => {
    setfilter(event.currentTarget.value);
  };

  const getVisibleContact = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = contactId => {
    setcontacts(contacts.filter(contact => contact.id !== contactId));
  };

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Apps>
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={changeFilter} />
        <ContactList
          contacts={getVisibleContact()}
          onDeleteContact={deleteContact}
        />
      </Container>
    </Apps>
  );
};

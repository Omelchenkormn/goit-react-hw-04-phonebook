import React from 'react';
import { Container, Span, Button } from './Contact.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <Container>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            <Span>
              {name} : {number}{' '}
              <Button onClick={() => onDeleteContact(id)}>Delete</Button>
            </Span>
          </li>
        ))}
      </ul>
    </Container>
  );
};

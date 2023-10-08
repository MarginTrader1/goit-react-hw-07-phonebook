import { ContactsList } from './Contacts/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';

export const App = () => {
  return (
    <div
      style={{
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '500px',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
};

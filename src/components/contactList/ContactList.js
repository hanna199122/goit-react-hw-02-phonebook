import css from './ContactList.module.css';
import { nanoid } from 'nanoid';

const ContactList = props => {
  const { contacts, onDeleteContact } = props;

  return (
    <ul className={css.contactList}>
      {contacts.map(contact => {
        return (
          <li key={contact.id}>
            {contact.name}
            <p>{contact.number}</p>
            <button
              onClick={() => {
                onDeleteContact(contact.id);
              }}
              className={css.contactListItemBtn}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;

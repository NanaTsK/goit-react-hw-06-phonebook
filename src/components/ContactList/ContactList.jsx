import ContactItem from 'components/ContactItem/ContactItem';
import { ContactBook } from './ContactList.styled';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const { contacts } = useSelector(state => state.contacts);
  const { filter } = useSelector(state => state.filter);
  const getFilterContacts = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  };
  const filterContacts = getFilterContacts();
  return (
    <ContactBook>
      <ContactItem contacts={filterContacts} />
    </ContactBook>
  );
};

export default ContactList;

//*================================================>>>>>
// import { ContactItem } from 'components/ContactItem/ContactItem';
// import { ContactBook } from './ContactList.styled';

// export const ContactList = ({ contacts, removeContact }) => {
//   return (
//     <ContactBook>
//       <ContactItem
//         contacts={contacts}
//         removeContact={removeContact}
//       ></ContactItem>
//     </ContactBook>
//   );
// };

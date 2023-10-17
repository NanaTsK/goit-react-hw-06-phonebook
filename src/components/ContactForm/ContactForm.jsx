import { useState } from 'react';
import { nanoid } from 'nanoid';
import {
  PhonebookForm,
  InputWrap,
  ContactLabel,
  ContactInput,
  ContactAddBtn,
} from './ContactForm.styled';

import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix';
import { addContactAction } from 'redux/contact/contactSlice';

const notifyInit = Notify.init({
  width: '280px',
  position: 'center-center',
  distance: '20px',
  opacity: 0.8,
  fontSize: '20px',
  borderRadius: '50px 10px',
  notiflixIconColor: 'rgba(0,0,0,0.6)',
  pauseOnHover: true,
});

const INITIAL_STATE = {
  name: '',
  number: '',
};

// export const ContactForm = ({ handleAddContact }) => {
const ContactForm = () => {
  const [name, setName] = useState(INITIAL_STATE.name);
  const [number, setNumber] = useState(INITIAL_STATE.number);
  const { contacts } = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const handleInput = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  // const handleSubmitForm = e => {
  //   e.preventDefault();
  //   const newContact = {
  //     id: nanoid(),
  //     name: name,
  //     number: number,
  //   };
  //   handleAddContact(newContact);
  //   setName(INITIAL_STATE.name);
  //   setNumber(INITIAL_STATE.number);
  // };
  const handleSubmitForm = e => {
    e.preventDefault();
    const isTrue = contacts.some(contact => name === contact.name);
    if (isTrue) {
      Notify.info(`${name} is already in your Contact List!`, notifyInit);
      return;
    }
    dispatch(addContactAction({ name, number, id: nanoid() }));
    setName(INITIAL_STATE.name);
    setNumber(INITIAL_STATE.number);
  };

  return (
    <PhonebookForm onSubmit={handleSubmitForm}>
      <InputWrap>
        <ContactInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain up to 16 letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Comte d'Artagnan"
          maxLength="16"
          autoComplete="off"
          value={name}
          onChange={handleInput}
          required
        />
        <ContactLabel>Name</ContactLabel>
      </InputWrap>

      <InputWrap>
        <ContactInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number may contain 5-16 digits, spaces, dashes, parentheses and can start with +"
          maxLength="16"
          autoComplete="off"
          value={number}
          onChange={handleInput}
          required
        />
        <ContactLabel>Number</ContactLabel>
      </InputWrap>

      <ContactAddBtn type="submit">Add contact</ContactAddBtn>
    </PhonebookForm>
  );
};

export default ContactForm;

//*=============================================>>>>>
// import { useState } from 'react';
// import { nanoid } from 'nanoid';
// import {
//   PhonebookForm,
//   InputWrap,
//   ContactLabel,
//   ContactInput,
//   ContactAddBtn,
// } from './ContactForm.styled';

// const INITIAL_STATE = {
//   name: '',
//   number: '',
// };

// export const ContactForm = ({ handleAddContact }) => {
//   const [name, setName] = useState(INITIAL_STATE.name);
//   const [number, setNumber] = useState(INITIAL_STATE.number);

//   const handleInput = e => {
//     const { name, value } = e.target;

//     switch (name) {
//       case 'name':
//         setName(value);
//         break;
//       case 'number':
//         setNumber(value);
//         break;
//       default:
//         return;
//     }
//   };

//   const handleSubmitForm = e => {
//     e.preventDefault();
//     const newContact = {
//       id: nanoid(),
//       name: name,
//       number: number,
//     };
//     handleAddContact(newContact);
//     setName(INITIAL_STATE.name);
//     setNumber(INITIAL_STATE.number);
//   };

//   return (
//     <PhonebookForm onSubmit={handleSubmitForm}>
//       <InputWrap>
//         <ContactInput
//           type="text"
//           name="name"
//           pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain up to 16 letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Comte d'Artagnan"
//           maxLength="16"
//           autoComplete="off"
//           value={name}
//           onChange={handleInput}
//           required
//         />
//         <ContactLabel>Name</ContactLabel>
//       </InputWrap>

//       <InputWrap>
//         <ContactInput
//           type="tel"
//           name="number"
//           pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
//           title="Phone number may contain 5-16 digits, spaces, dashes, parentheses and can start with +"
//           maxLength="16"
//           autoComplete="off"
//           value={number}
//           onChange={handleInput}
//           required
//         />
//         <ContactLabel>Number</ContactLabel>
//       </InputWrap>

//       <ContactAddBtn type="submit">Add contact</ContactAddBtn>
//     </PhonebookForm>
//   );
// };

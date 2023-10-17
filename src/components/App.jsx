// import { useState, useEffect } from 'react';

import { Container } from './index.styled';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

// const notifyInit = Notify.init({
//   width: '280px',
//   position: 'center-center',
//   distance: '20px',
//   opacity: 0.8,
//   fontSize: '20px',
//   borderRadius: '50px 10px',
//   notiflixIconColor: 'rgba(0,0,0,0.6)',
//   pauseOnHover: true,
// });

const App = () => {
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  );
};

export default App;

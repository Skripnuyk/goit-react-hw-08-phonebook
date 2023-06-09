import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, fetchContacts } from 'redux/contacts/operations';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/contacts/selectors';
import { Message, Text, Title, Wrap } from './ContactsBar.styled';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import Notiflix from 'notiflix';

const ContactsBar = () => {
  const dispatch = useDispatch();
  const allContacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const alertNotification = (contactNumber, contactName) => {
      return Notiflix.Notify.failure(
        `${contactNumber} is already in contacts under the name ${contactName}.`
      );
  };

  const checkСontact = newNumber => {
    return allContacts.some(contact => contact.number === newNumber);
  };

  const onSubmit = (name, number) => {
    if (checkСontact(number)) {
      return alertNotification(number, name);
    }

    dispatch(addContact({ name, number }));
  };

  return (
    <Wrap isHeight={allContacts.length > 0}>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={onSubmit} />
      <Text>Contacts</Text>
      {!error && isLoading}
      {!error && !isLoading && allContacts.length === 0 ? (
        <Message>Ooops... There are no contacts yet</Message>
      ) : (
        <>
          <Filter />
          <ContactList />
        </>
      )}
    </Wrap>
  );
};

export default ContactsBar;
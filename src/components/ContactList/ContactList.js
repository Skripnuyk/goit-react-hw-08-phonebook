import ContactListItem from 'components/ContactListItem/';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { selectFilter } from 'redux/filter/selectors';
import { List } from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const makeFiltredContacts = () => {
      return contacts.filter(({ name }) => {
        return name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  const makeList = array => {
    return array.map(({ id, name, number }) => {
      return (
        <ContactListItem
          key={id}
          contactName={name}
          contactNumber={number}
          contactId={id}
        />
      );
    });
  };

  return <List>{makeList(makeFiltredContacts())}</List>;
};

export default ContactList;
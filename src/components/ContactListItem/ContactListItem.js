import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { ListItem, Button, Text } from './ContactListItem.styled';
import { deleteContact } from 'redux/contacts/operations';

const ContactListItem = ({ contactName, contactNumber, contactId }) => {
  const dispatch = useDispatch();
  const handleDelete = itemId => dispatch(deleteContact(itemId));
  return (
    <ListItem>
      <Text>{contactName}</Text>
      <Text>{contactNumber}</Text>
      <Button type="button" onClick={() => handleDelete(contactId)}>
        Delete
      </Button>
    </ListItem>
  );
};

ContactListItem.propTypes = {
  contactName: PropTypes.string.isRequired,
  contactNumber: PropTypes.string.isRequired,
  contactId: PropTypes.string.isRequired,
};

export default ContactListItem;
import { ErrorMessage } from 'formik';
import { object, string } from 'yup';
import PropTypes from 'prop-types';
import {
  Button,
  FormBox,
  FormikWrap,
  InputName,
  InputPhone,
  Label,
  Message,
} from './ContactForm.styled';

const initialValues = {
  name: '',
  number: '',
};

const userSchema = object({
  name: string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required('⚠️Please enter name.'),
  number: string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('⚠️Please enter number.'),
});

const ContactForm = ({ onSubmit }) => {
  function handleSubmit({ name, number }, { resetForm }) {
    onSubmit(name, number);
    resetForm();
  }

  return (
    <FormikWrap
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={userSchema}
    >
      <FormBox autoComplete="off">
        <Label>
          <span>Name</span>
          <InputName placeholder="Enter contact name" type="text" name="name" />
          <ErrorMessage component={Message} name="name" />
        </Label>
        <Label>
          <span>Phone</span>
          <InputPhone
            placeholder="Enter contact phone"
            type="tel"
            name="number"
          />
          <ErrorMessage component={Message} name="number" />
        </Label>
        <Button type="submit">Add contact</Button>
      </FormBox>
    </FormikWrap>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;

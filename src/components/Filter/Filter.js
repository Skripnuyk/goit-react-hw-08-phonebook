import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filter/filterSlice';
import { Input, Label } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilter = ({ target: { value } }) =>
    dispatch(filterContacts(value));

  return (
    <Label>
      Find contacts by name
      <Input type="text" name="filter" onChange={handleFilter} />
    </Label>
  );
};

export default Filter;

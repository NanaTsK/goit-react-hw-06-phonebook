import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';
import {
  InputWrap,
  ContactLabel,
  ContactInput,
} from '../ContactForm/ContactForm.styled';
// import { FilterForm } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const handleFilter = ({ target: { value } }) => {
    dispatch(setFilter(value));
  };
  return (
    <InputWrap>
      <ContactInput
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        maxLength="16"
        id="filter"
        onChange={handleFilter}
      />
      <ContactLabel htmlFor="filter">Find contacts by name</ContactLabel>
    </InputWrap>
  );
};

export default Filter;

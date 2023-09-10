import PropTypes from 'prop-types';
import css from './Search.module.css';
import { useDispatch, useSelector } from 'react-redux';
// import { changeFilter } from 'redux/actions';
import { getContactsFilter } from 'redux/selectors';
import { chengeFilter } from 'redux/sliceFilter';

export default function Search() {

const {filter}=useSelector(getContactsFilter)
const dispatch=useDispatch();

const onChange=(e)=>{
  const { value } = e.target;
  dispatch(chengeFilter(value));
}


  return (
    <div className={css.decorSearch}>
      <label className={css.label} htmlFor="search">
        Find contacts by name
      </label>
      <input
        className={css.input}
        type="text"
        id="search"
        name="name"
        onChange={onChange}
        value={filter}
      />
    </div>
  );
}

Search.protoTypes = {
  onClick: PropTypes.func.isRequired,
  searchName: PropTypes.string,
};

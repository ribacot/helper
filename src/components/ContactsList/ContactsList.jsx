import { useState } from 'react';
import { FiXSquare } from 'react-icons/fi';
import { IconContext } from 'react-icons';

import DeleteAll from 'components/Delete/Delete';
import css from './ContactsList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { delAll, deleteContact } from 'redux/actions';

export const ContactsList = () => {
  const [checked, setChecked] = useState(false);

  const { items } = useSelector(state => state.contacts);
  const   {filter}  = useSelector(state => state.filter);

  const dispatch = useDispatch();
console.log('filter',filter)

  const getFilteredContacts = () => {
    return items.filter(({ name }) => name.toLowerCase().includes(filter));
  };
console.log('filtered',getFilteredContacts())
  const deleteAllContact = () => {
    dispatch(delAll());
  };

  const deleteItem = contactId => {
    const contactDel = items.filter(contact => contact.id !== contactId);
    dispatch(deleteContact(contactDel));
  };

  return (
    <>
      <DeleteAll
        onDeleteAllContact={deleteAllContact}
        checkedEl={checked}
        onChange={e => setChecked(e.target.checked)}
      />
      {getFilteredContacts().length ? (
        <ul className={css.listContacts}>
          {getFilteredContacts().map(({ name, id, number }) => (
            <li key={id} className={css.contact}>
              {name}:
              <span className={css.contactTel}>
                {number}
                <button
                  className={css.btnDel}
                  type="button"
                  disabled={checked}
                  onClick={() => deleteItem(id)}
                >
                  <IconContext.Provider value={{ size: '1.2em' }}>
                    <FiXSquare />
                  </IconContext.Provider>
                </button>
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p>Not found contacts</p>
      )}
    </>
  );
};

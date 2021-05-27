import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './ContactList.module.css';
import actions from '../../redux/contactForm/contactForm-actions';

const ContactList = ({ phoneBook, onDeleteContact }) => {
  return (
    <>
      <ul>
        {phoneBook.map(nameContact => (
          <li className={styles.contact} key={nameContact.id}>{nameContact.name}: {nameContact.number}
            <button className={styles.button} type="button" onClick={()=>onDeleteContact(nameContact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  )
};

ContactList.propTypes = {
    phoneBook: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      }),
    ),
    onDeleteContact: PropTypes.func.isRequired,
};

const searchFilter = (allContacts, filter) => {
  const caseInsensitive = filter.toLocaleLowerCase();
        return allContacts.filter(contact => 
            contact.name.toLocaleLowerCase().includes(caseInsensitive)
        );
    };

const mapStateToProps = ({state: {contacts, filter}}) => ({
  phoneBook: searchFilter(contacts, filter),
    })

const mapDispatchProps = dispatch => ({
  onDeleteContact: (id) => dispatch(actions.deleteContact(id)),
})

export default connect(mapStateToProps, mapDispatchProps)(ContactList);
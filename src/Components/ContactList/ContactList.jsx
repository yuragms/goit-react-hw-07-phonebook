import React from "react";
import { connect } from "react-redux";
import {List, Item, Button,  } from "./Contactlist.styled.jsx";
import * as phonebookActions  from '../../redux/phonebook/phonebook-actions';

const ContactList = ({ contacts, onDeleteContact }) => (
  <List>
    {contacts.map(({ id, name, number }) => (
      <Item key={id}>
        <span>{name}:</span> <span>{number}</span>
        <Button type="button" onClick={() => onDeleteContact(id)}>
          Delete
        </Button>
      </Item>
    ))}
  </List>
);

 const getFilteredContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) => 
       contact.name.toLowerCase().includes(normalizedFilter)
    );
  };



const mapStateToProps = state => {
  const {filter, items} = state.contacts;
 
  const visibleContacts = getFilteredContacts (items, filter);

 return  {
  contacts: visibleContacts,
};
};

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(phonebookActions.delContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
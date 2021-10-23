
import { useState } from 'react';
import {connect } from 'react-redux';
import { v4 as uuidv4 } from "uuid";
import * as phonebookActions  from '../../redux/phonebook/phonebook-actions';

import { ContactForm, Label, Input, Button } from "./ContactForm.styled";

function Form ({items, onSubmit}) {
  
  const [name, setName] = useState('');
  const [number, setNumber] =  useState('');

 const nameInputId = uuidv4();
 const numberInputId = uuidv4();

  const handleChange = (e) => {
    const {name, value} = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
        case 'number':
          setNumber(value);
          break;

          default: return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    

    
    const isRepeatableContact = items.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isRepeatableContact) {
      alert(`${name} is alredy in contacts`);
    } else {
      onSubmit(name, number);
    console.log(name, number);
    reset();
    }


   
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  
    return (
      <ContactForm onSubmit={handleSubmit}>
        <Label htmlFor={nameInputId}>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={name}
            onChange={handleChange}
            id={nameInputId}
          />
        </Label>
        <Label htmlFor={numberInputId}>
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={number}
            onChange={handleChange}
            id={numberInputId}
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </ContactForm>
    );
  
}

const mapStateToProps = state => {
  const items = state.contacts;
  console.log(items);
 return items;

};

const mapDispatchToProps = dispatch => ({
  onSubmit: (name, number) => dispatch(phonebookActions.addContacts(name, number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);


import React from "react";
import { connect } from "react-redux";
import * as phonebookActions  from '../../redux/phonebook/phonebook-actions';

import { Label, Input } from "./Filter.styled.jsx";

const Filter = ({ value, onChange }) => (
  <Label>
    Find contacts by name
    <Input type="text" value={value} onChange={onChange} />
  </Label>
);

const mapStateToProps = (state) => ({
  value: state.contacts.filter

})

const mapDispatchToProps = dispatch => ({
  onChange: (e) => dispatch(phonebookActions.changeFilter(e.target.value)),

});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

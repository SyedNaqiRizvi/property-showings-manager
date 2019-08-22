import React from 'react';
import TextField from '@material-ui/core/TextField';

const BookingFormInput = (props) => (
  <div>
    <TextField
      id={props.id}
      label={props.label}
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
      type="text"
      style={{ margin: '1rem' }}
    />
  </div>
);

export default BookingFormInput;

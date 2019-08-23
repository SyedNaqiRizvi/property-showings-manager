import React from 'react';
import TextField from '@material-ui/core/TextField';

const BookingFormInput = (props) => (
  <div>
    <TextField
      {...props}
      style={{ margin: '1rem' }}
      InputLabelProps={{
        shrink: true,
      }}
    />
  </div>
);

export default BookingFormInput;

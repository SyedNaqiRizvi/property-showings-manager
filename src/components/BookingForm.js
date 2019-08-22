import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import BookingFormInput from './BookingFormInput';
const BookingForm = (props) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guest, setGuest] = useState('');

  const handleInputOnChange = (setFn) => (event) => setFn(event.target.value);
  const resetState = () => {
    setDate('');
    setTime('');
    setGuest('');
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();
    props.createNewBooking({ date, time, guest });
    resetState();
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <div style={{ display: 'flex' }}>
        <BookingFormInput
          id="date"
          label="Date"
          value={date}
          onChange={handleInputOnChange(setDate)}
          placeholder="Date"
        />
        <BookingFormInput
          id="time"
          label="Time"
          value={time}
          onChange={handleInputOnChange(setTime)}
          placeholder="Time"
        />
        <BookingFormInput
          id="guest"
          label="Guest"
          value={guest}
          onChange={handleInputOnChange(setGuest)}
          placeholder="Guest"
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
        <Button variant="outlined" id="submit-button" type="submit">
          Add Booking
        </Button>
      </div>
    </form>
  );
};

export default BookingForm;

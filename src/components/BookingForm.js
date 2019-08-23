import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import BookingFormInput from './BookingFormInput';
import { connect } from 'react-redux';
import { addShowing } from '../actions';

const BookingForm = ({ dispatch }) => {
  const getFormattedDate = (date) =>
    `${date.getFullYear()}-${getPaddedNumber(date.getMonth())}-${getPaddedNumber(date.getDay())}`;
  const getFormattedTime = (date) =>
    `${getPaddedNumber(date.getHours())}:${getPaddedNumber(date.getMinutes())}`;
  const getPaddedNumber = (num) => num.toString().padStart(2, '0');

  const resetState = () => {
    setDate(getFormattedDate(new Date()));
    setTime(getFormattedTime(new Date()));
    setGuest('');
  };
  const handleInputOnChange = (setFn) => (event) => setFn(event.target.value);
  const handleOnSubmit = (event) => {
    event.preventDefault();
    dispatch(addShowing({ date, time, guest }));
    resetState();
  };

  const [date, setDate] = useState(getFormattedDate(new Date()));
  const [time, setTime] = useState(getFormattedTime(new Date()));
  const [guest, setGuest] = useState('');

  return (
    <form onSubmit={handleOnSubmit}>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <BookingFormInput
          id="date"
          label="Date"
          value={date}
          onChange={handleInputOnChange(setDate)}
          type="date"
          required
        />
        <BookingFormInput
          id="time"
          label="Time"
          value={time}
          onChange={handleInputOnChange(setTime)}
          placeholder="Time"
          type="time"
          required
        />
        <BookingFormInput
          id="guest"
          label="Guest"
          value={guest}
          onChange={handleInputOnChange(setGuest)}
          placeholder="Guest"
          type="text"
          required
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

export default connect()(BookingForm);

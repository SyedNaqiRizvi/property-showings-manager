import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import BookingFormInput from './BookingFormInput';
import { connect } from 'react-redux';
import { SAVE_SHOWING } from '../actions/action-types';

const useBookingFormState = (saveShowing) => {
  const getFormattedDate = (date) =>
    `${date.getFullYear()}-${getPaddedNumber(date.getMonth())}-${getPaddedNumber(date.getDate())}`;
  const getFormattedTime = (date) =>
    `${getPaddedNumber(date.getHours())}:${getPaddedNumber(date.getMinutes())}`;
  const getPaddedNumber = (num) => num.toString().padStart(2, '0');

  const resetState = () => {
    const now = new Date();
    const oneHourFromNow = new Date();
    oneHourFromNow.setHours(now.getHours() + 1);
    setDate(getFormattedDate(now));
    setStartTime(getFormattedTime(now));
    setEndTime(getFormattedTime(oneHourFromNow));
    setGuest('');
  };
  const handleInputOnChange = (setFn) => (event) => setFn(event.target.value);
  const handleOnSubmit = (event) => {
    event.preventDefault();
    saveShowing({ date, startTime, endTime, guest, status: 'pending' });
    resetState();
  };

  const now = new Date();
  const oneHourFromNow = new Date();
  oneHourFromNow.setHours(now.getHours() + 1);
  const [date, setDate] = useState(getFormattedDate(now));
  const [startTime, setStartTime] = useState(getFormattedTime(now));
  const [endTime, setEndTime] = useState(getFormattedTime(oneHourFromNow));
  const [guest, setGuest] = useState('');
  return {
    handleInputOnChange,
    handleOnSubmit,
    date,
    setDate,
    startTime,
    setStartTime,
    endTime,
    setEndTime,
    guest,
    setGuest,
  };
};

const BookingForm = ({ saveShowing }) => {
  const {
    handleInputOnChange,
    handleOnSubmit,
    date,
    setDate,
    startTime,
    setStartTime,
    endTime,
    setEndTime,
    guest,
    setGuest,
  } = useBookingFormState(saveShowing);

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
          id="start-time"
          label="From"
          value={startTime}
          onChange={handleInputOnChange(setStartTime)}
          type="time"
          required
        />
        <BookingFormInput
          id="end-time"
          label="To"
          value={endTime}
          onChange={handleInputOnChange(setEndTime)}
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

const mapDispatchToProps = (dispatch) => ({
  saveShowing: (showing) => dispatch({ type: SAVE_SHOWING, showing }),
});

export default connect(
  null,
  mapDispatchToProps,
)(BookingForm);

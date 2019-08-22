import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ShowingList from './components/ShowingList';
import BookingForm from './components/BookingForm';
import Container from '@material-ui/core/Container';

const App = () => {
  const [showings, setShowings] = useState([
    {
      id: 1,
      date: '2019-08-21',
      time: '18:00',
      guest: 'John Doe',
    },
  ]);

  const createNewBooking = (booking) =>
    setShowings([...showings, { id: showings.length + 1, ...booking }]);

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '100%',
        justifyItems: 'center',
      }}
    >
      <div style={{ fontSize: '1.4rem', gridColumn: '1', gridRow: '1', margin: '1rem' }}>
        Property Showing Manager
      </div>
      <BookingForm createNewBooking={createNewBooking} style={{ gridColumn: '1', gridRow: '2' }} />
      <ShowingList showings={showings} style={{ gridColumn: '1', gridRow: '3' }} />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));

import React from 'react';
import ShowingList from './ShowingList';
import BookingForm from './BookingForm';
import Title from './Title';
import AppGrid from './AppGrid';
import AppBar from './AppBar';
import Card from '@material-ui/core/Card';

const App = () => {
  return (
    <>
      <AppBar />
      <AppGrid>
        <Card style={{ gridColumn: '2', padding: '1rem' }}>
          <Title />
          <BookingForm />
          <ShowingList />
        </Card>
      </AppGrid>
    </>
  );
};

export default App;

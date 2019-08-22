import React from 'react';
import Showing from './Showing';

const ShowingList = (props) => (
  <>
    {props.showings.map((showing) => (
      <Showing key={showing.id} {...showing} />
    ))}
  </>
);

export default ShowingList;

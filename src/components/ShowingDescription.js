import React from 'react';

const ShowingDescription = (props) => (
  <div style={{ gridColumn: '2', gridRow: props.gridRow, margin: '.5rem' }}>
    {props.label}: {props.value}
  </div>
);

export default ShowingDescription;

import React from 'react';

const AppGrid = (props) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: '10% 80% 10%',
      justifyItems: 'center',
      minHeight: '100vh',
      margin: '2rem',
    }}
  >
    {props.children}
  </div>
);
export default AppGrid;

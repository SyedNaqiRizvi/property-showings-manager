import React from 'react';

const AppGrid = (props) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: '100%',
      justifyItems: 'center',
    }}
  >
    {props.children}
  </div>
);
export default AppGrid;

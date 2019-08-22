import React from 'react';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';

const Showing = (props) => {
  const getAvatarNameLetter = (name) => {
    const names = name.split(' ');
    return names.length > 1 ? getFirstLettersOfFullName(names) : getFistLetterOfName(name);
  };
  const getFistLetterOfName = (name) => name[0];
  const getFirstLettersOfFullName = (names) =>
    getFistLetterOfName(names[0]) + getFistLetterOfName(names[1]);
  return (
    <Card
      style={{
        margin: '1rem 2rem 0rem 2rem',
        display: 'grid',
        gridTemplateColumns: '20% 80%',
        gridTemplateRows: '20% 20% 20% 20% 20%',
        justifyItems: 'stretch',
        alignItems: 'center',
        minWidth: '80%',
      }}
    >
      <Avatar style={{ gridColumn: '1', margin: '1rem', gridRow: '3', justifySelf: 'center' }}>
        {getAvatarNameLetter(props.guest)}
      </Avatar>
      <div style={{ gridColumn: '2', gridRow: '2', marginLeft: '1rem' }}>Date: {props.date}</div>
      <div style={{ gridColumn: '2', gridRow: '3', marginLeft: '1rem' }}>Time: {props.time}</div>
      <div style={{ gridColumn: '2', gridRow: '4', marginLeft: '1rem' }}>Guest: {props.guest}</div>
    </Card>
  );
};

export default Showing;

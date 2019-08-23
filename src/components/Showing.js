import React from 'react';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import ShowingDescription from './ShowingDescription';

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
        gridTemplateColumns: '30% 70%',
        gridTemplateRows: '20% 20% 20% 20% 20%',
        justifyItems: 'stretch',
        alignItems: 'center',
        minWidth: '20rem',
      }}
    >
      <Avatar style={{ gridColumn: '1', gridRow: '3', justifySelf: 'center' }}>
        {getAvatarNameLetter(props.guest)}
      </Avatar>
      <ShowingDescription gridRow="2" label="Date" value={props.date} />
      <ShowingDescription gridRow="3" label="Time" value={props.time} />
      <ShowingDescription gridRow="4" label="Guest" value={props.guest} />
    </Card>
  );
};

export default Showing;

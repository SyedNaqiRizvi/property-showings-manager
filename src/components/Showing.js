import React from 'react';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import ShowingDescription from './ShowingDescription';
import Button from '@material-ui/core/Button';

const Showing = (props) => {
  const getAvatarNameLetter = (name) => {
    const names = name.split(' ');
    return names.length > 1 ? getFirstLettersOfFullName(names) : getFistLetterOfName(name);
  };
  const getFistLetterOfName = (name) => name[0];
  const getFirstLettersOfFullName = (names) =>
    getFistLetterOfName(names[0]) + getFistLetterOfName(names[1]);
  const updateStatus = (showing) => ({
    ...showing,
    status: 'approved',
  });
  return (
    <>
      <Card
        style={{
          margin: '1rem 2rem 0rem 2rem',
          display: 'grid',
          gridTemplateColumns: '40% 60%',
          gridTemplateRows: '14.2% 14.2% 14.2% 14.2% 14.2% 14.2% 14.2%',
          justifyItems: 'stretch',
          alignItems: 'center',
          minWidth: '20rem',
        }}
      >
        <Avatar style={{ gridColumn: '1', gridRow: '4', justifySelf: 'center' }}>
          {getAvatarNameLetter(props.showing.guest)}
        </Avatar>
        <ShowingDescription gridRow="2" label="Date" value={props.showing.date} />
        <ShowingDescription gridRow="3" label="From" value={props.showing.startTime} />
        <ShowingDescription gridRow="4" label="To" value={props.showing.endTime} />
        <ShowingDescription gridRow="5" label="Guest" value={props.showing.guest} />
        <ShowingDescription gridRow="6" label="Status" value={props.showing.status} />
      </Card>
      {props.showing.status === 'pending' && (
        <Card style={{ minWidth: '20rem', margin: '0rem 2rem 0rem 2rem' }}>
          <Button
            style={{
              minWidth: '100%',
              minHeight: '100%',
              backgroundColor: '#2e7d32',
              color: 'white',
            }}
            onClick={() => {
              console.log('here');
              props.approveShowing(updateStatus(props.showing));
            }}
          >
            Confirm
          </Button>
        </Card>
      )}
    </>
  );
};

export default Showing;

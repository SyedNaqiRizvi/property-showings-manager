import React from 'react';
import Showing from './Showing';
import { connect } from 'react-redux';

const ShowingList = (props) => (
  <>
    {props.showings.map((showing) => (
      <Showing key={showing.id} {...showing} />
    ))}
  </>
);

const mapStateToProps = (state) => ({
  showings: state.showings,
});

export default connect(mapStateToProps)(ShowingList);

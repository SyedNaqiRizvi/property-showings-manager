import React, { useEffect } from 'react';
import Showing from './Showing';
import { connect } from 'react-redux';
import { INIT_SHOWINGS, APPROVE_SHOWING } from '../actions/action-types';

const ShowingList = (props) => {
  useEffect(() => {
    props.init();
  });

  return (
    <>
      {props.showings.map((showing) => (
        <Showing key={showing.id} showing={showing} approveShowing={props.approveShowing} />
      ))}
    </>
  );
};

const mapStateToProps = (state) => ({
  showings: state.showings,
});

const mapDispatchToProps = (dispatch) => ({
  init: () => dispatch({ type: INIT_SHOWINGS }),
  approveShowing: (showing) => dispatch({ type: APPROVE_SHOWING, showing }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShowingList);

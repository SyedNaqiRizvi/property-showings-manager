import { UPDATE_SHOWINGS, POPULATE_SHOWINGS } from '../actions/action-types';

const showings = (state = [], action) => {
  switch (action.type) {
    case UPDATE_SHOWINGS:
    case POPULATE_SHOWINGS:
      return action.showings;
    default:
      return state;
  }
};

export default showings;

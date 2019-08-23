import { ADD_SHOWING } from '../actions/action-types';

const showings = (state = [], action) => {
  switch (action.type) {
    case ADD_SHOWING:
      return [
        ...state,
        {
          id: action.id,
          date: action.payload.date,
          time: action.payload.time,
          guest: action.payload.guest,
        },
      ];
    default:
      return state;
  }
};

export default showings;

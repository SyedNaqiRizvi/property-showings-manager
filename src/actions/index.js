import { ADD_SHOWING } from './action-types';

let nextShowingId = 1;

const addShowing = (showing) => ({
  type: ADD_SHOWING,
  id: nextShowingId++,
  payload: showing,
});

export { addShowing };

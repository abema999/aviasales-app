import { SHOW_MORE_TICKETS } from './actions';

const initialState = 5;

const moreReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MORE_TICKETS:
      return state + 5;
    default:
      return state;
  }
};

export default moreReducer;

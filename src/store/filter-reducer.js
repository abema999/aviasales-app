import { TOGGLE_ALL, TOGGLE_TRANSFER } from './actions';

const initialState = {
  all: true,
  transfers: {
    0: true,
    1: true,
    2: true,
    3: true,
  },
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ALL: {
      const newState = !state.all;
      return {
        ...state,
        all: newState,
        transfers: {
          0: newState,
          1: newState,
          2: newState,
          3: newState,
        },
      };
    }
    case TOGGLE_TRANSFER: {
      const newTransfers = {
        ...state.transfers,
        [action.payload]: !state.transfers[action.payload],
      };
      const allSelected = Object.values(newTransfers).every((value) => value);

      return {
        ...state,
        all: allSelected ? true : false,
        transfers: newTransfers,
      };
    }
    default:
      return state;
  }
};

export default filterReducer;

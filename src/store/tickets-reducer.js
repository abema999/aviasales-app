import { fetchTickets, ADD_TICKETS } from './actions';

const initialState = {
  tickets: [],
  loading: false,
  error: null,
};

const ticketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case fetchTickets.pending.type:
      return { ...state, loading: true, error: null };

    case fetchTickets.fulfilled.type:
      return { ...state, loading: false };

    case fetchTickets.rejected.type:
      return { ...state, loading: false, error: action.payload };

    case ADD_TICKETS:
      return { ...state, tickets: [...state.tickets, ...action.payload] };

    default:
      return state;
  }
};

export default ticketsReducer;

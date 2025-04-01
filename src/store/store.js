import { configureStore } from '@reduxjs/toolkit';

import filterReducer from './filter-reducer';
import sortReducer from './sort-reducer';
import ticketsReducer from './tickets-reducer';

const store = configureStore({
  reducer: {
    filter: filterReducer,
    sort: sortReducer,
    tickets: ticketsReducer,
  },
});

export default store;

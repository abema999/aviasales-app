import { configureStore } from '@reduxjs/toolkit';

import filterReducer from './filter-reducer';
import sortReducer from './sort-reducer';

const store = configureStore({
  reducer: {
    filter: filterReducer,
    sort: sortReducer,
  },
});

export default store;

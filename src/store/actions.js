import { createAsyncThunk } from '@reduxjs/toolkit';

export const TOGGLE_ALL = 'TOGGLE_ALL';
export const TOGGLE_TRANSFER = 'TOGGLE_TRANSFER';
export const SET_SORT = 'SET_SORT';

export const toggleAll = () => {
  return {
    type: TOGGLE_ALL,
  };
};

export const toggleTransfer = (transferValue) => {
  return {
    type: TOGGLE_TRANSFER,
    payload: transferValue,
  };
};

export const setSort = (sortValue) => {
  return {
    type: SET_SORT,
    payload: sortValue,
  };
};

export const fetchTickets = createAsyncThunk(
  'tickets/fetchTickets',
  async (_, { rejectWithValue }) => {
    try {
      const searchRes = await fetch('https://aviasales-test-api.kata.academy/search');
      const searchData = await searchRes.json();

      const ticketsRes = await fetch(
        `https://aviasales-test-api.kata.academy/tickets?searchId=${searchData.searchId}`,
      );
      const ticketsData = await ticketsRes.json();

      return ticketsData.tickets;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

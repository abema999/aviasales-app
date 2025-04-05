import { createAsyncThunk } from '@reduxjs/toolkit';

export const TOGGLE_ALL = 'TOGGLE_ALL';
export const TOGGLE_TRANSFER = 'TOGGLE_TRANSFER';
export const SET_SORT = 'SET_SORT';
export const ADD_TICKETS = 'ADD_TICKETS';
export const SHOW_MORE_TICKETS = 'SHOW_MORE_TICKETS';

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

export const addTickets = (tickets) => ({
  type: ADD_TICKETS,
  payload: tickets,
});

export const showMoreTickets = () => ({
  type: SHOW_MORE_TICKETS,
});

export const fetchTickets = createAsyncThunk(
  'tickets/fetchTickets',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const searchRes = await fetch('https://aviasales-test-api.kata.academy/search');
      const searchData = await searchRes.json();

      const maxRetries = 3;

      const fetchAllTickets = async (retries = maxRetries) => {
        try {
          const ticketsRes = await fetch(
            `https://aviasales-test-api.kata.academy/tickets?searchId=${searchData.searchId}`,
          );

          if (ticketsRes.status === 500) {
            if (retries > 0) {
              console.log(
                `Внутренняя ошибка сервера! Повторная попытка... Осталось попыток: ${retries}`,
              );
              return await fetchAllTickets(retries - 1);
            } else {
              throw new Error('Превышено число попыток!');
            }
          }

          if (!ticketsRes.ok) {
            throw new Error(`Ошибка: ${ticketsRes.status}`);
          }

          const ticketsData = await ticketsRes.json();

          dispatch(addTickets(ticketsData.tickets));

          if (!ticketsData.stop) {
            return await fetchAllTickets(maxRetries);
          }
        } catch (error) {
          console.error('Ошибка при получении билетов!', error.message);
          throw error;
        }
      };

      await fetchAllTickets();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

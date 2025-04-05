import { createSelector } from '@reduxjs/toolkit';

export const selectFilter = (state) => state.filter;
export const selectSort = (state) => state.sort;
export const selectTickets = (state) => state.tickets.tickets;

export const selectFilteredTickets = createSelector(
  [selectFilter, selectTickets],
  (filter, tickets) => {
    return tickets.filter((ticket) =>
      ticket.segments.some((segment) => filter.transfers[segment.stops.length]),
    );
  },
);

export const selectSortedTickets = createSelector(
  [selectSort, selectFilteredTickets],
  (sort, filteredTickets) => {
    return [...filteredTickets].sort((a, b) => {
      if (sort === 'cheap') {
        return a.price - b.price;
      }
      if (sort === 'fast') {
        return (
          Math.min(a.segments[0].duration, a.segments[1].duration) -
          Math.min(b.segments[0].duration, b.segments[1].duration)
        );
      }
      if (sort === 'optimal') {
        const ticketA =
          a.price * 0.5 + a.segments.reduce((acc, segment) => acc + segment.duration, 0) * 0.5;
        const ticketB =
          b.price * 0.5 + b.segments.reduce((acc, segment) => acc + segment.duration, 0) * 0.5;
        return ticketA - ticketB;
      }
      return 0;
    });
  },
);

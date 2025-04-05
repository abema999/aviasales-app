import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { showMoreTickets } from '../../store/actions';
import { selectSortedTickets } from '../../store/selectors';

import styles from './more-button.module.scss';

const MoreButton = () => {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.tickets);
  const tickets = useSelector(selectSortedTickets);

  if (error || tickets.length === 0) {
    return null;
  }

  return (
    <button
      className={[styles['button'], styles['more-button']].join(' ')}
      onClick={() => dispatch(showMoreTickets())}
    >
      {'Показать еще 5 билетов'.toUpperCase()}
    </button>
  );
};

export default MoreButton;

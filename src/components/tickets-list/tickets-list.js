import React from 'react';
import { useSelector } from 'react-redux';

import TicketsItem from '../tickets-item/tickets-item';

import styles from './tickets-list.module.scss';

const TicketsList = () => {
  const { tickets, loading, error } = useSelector((state) => state.tickets);

  if (loading) {
    return <p>Загрузка билетов...</p>;
  }
  if (error) {
    return <p>Что-то пошло не так!</p>;
  }
  if (tickets.length === 0) {
    return <p>Ничего не найдено!</p>;
  }

  return (
    <div className={styles['tickets-list']}>
      {tickets.slice(0, 5).map((el, i) => (
        <TicketsItem key={i} ticket={el}></TicketsItem>
      ))}
    </div>
  );
};

export default TicketsList;

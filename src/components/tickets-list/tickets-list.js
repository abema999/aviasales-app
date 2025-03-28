import React from 'react';

import TicketsItem from '../tickets-item/tickets-item';

import styles from './tickets-list.module.scss';

const TicketsList = () => {
  return (
    <div className={styles['tickets-list']}>
      <TicketsItem />
      <TicketsItem />
      <TicketsItem />
    </div>
  );
};

export default TicketsList;

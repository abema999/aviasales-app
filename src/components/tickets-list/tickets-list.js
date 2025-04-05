import React from 'react';
import { useSelector } from 'react-redux';
import { Spin, Alert } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import { selectSortedTickets } from '../../store/selectors';
import TicketsItem from '../tickets-item/tickets-item';

import styles from './tickets-list.module.scss';

const TicketsList = () => {
  const { loading, error } = useSelector((state) => state.tickets);
  const tickets = useSelector(selectSortedTickets);
  const more = useSelector((state) => state.more);
  const spinnerStyle = {
    marginBottom: 20,
    padding: 50,
    background: 'rgba(0, 0, 0, 0)',
    borderRadius: 0,
  };
  const spinner = loading ? (
    <Spin tip="Загрузка билетов..." indicator={<LoadingOutlined spin />} size="large">
      <div style={spinnerStyle}></div>
    </Spin>
  ) : null;
  const errorAlert =
    !loading && error ? <Alert message="Что-то пошло не так!" type="error"></Alert> : null;
  const noTicketsAlert =
    !loading && !error && tickets.length === 0 ? (
      <Alert message="Рейсов, подходящих под заданные фильтры, не найдено" type="info"></Alert>
    ) : null;
  const ticketsList = !error ? (
    <div className={styles['tickets-list']}>
      {tickets.slice(0, more).map((el, i) => (
        <TicketsItem key={i} ticket={el}></TicketsItem>
      ))}
    </div>
  ) : null;

  return (
    <div>
      {spinner}
      {errorAlert}
      {noTicketsAlert}
      {ticketsList}
    </div>
  );
};

export default TicketsList;

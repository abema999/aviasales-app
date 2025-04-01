import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchTickets } from '../../store/actions';
import Header from '../header/header';
import Filter from '../filter/filter';
import Sort from '../sort/sort';
import TicketsList from '../tickets-list/tickets-list';
import MoreButton from '../more-button/more-button';

import styles from './app.module.scss';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTickets());
  }, []);

  return (
    <div className={styles['app']}>
      <header className={styles['header']}>
        <Header></Header>
      </header>
      <main className={styles['main']}>
        <section>
          <Filter></Filter>
        </section>
        <section>
          <Sort></Sort>
          <TicketsList></TicketsList>
          <MoreButton></MoreButton>
        </section>
      </main>
    </div>
  );
};

export default App;

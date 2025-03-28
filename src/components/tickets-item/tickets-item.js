import React from 'react';

import s7 from '../../assets/s7.svg';

import styles from './tickets-item.module.scss';

const TicketsItem = () => {
  return (
    <div className={styles['tickets-item']}>
      <div className={styles['tickets-item__title']}>
        <p className={styles['tickets-item__price']}>13 400 P</p>
        <img className={styles['tickets-item__logo']} src={s7} alt="Логотип" />
      </div>
      <div className={styles['tickets-item__description']}>
        <div className={styles['tickets-item__way']}>
          <div className={styles['tickets-item__wrapper']}>
            <p className={styles['tickets-item__label']}>MOW - HKT</p>
            <p className={styles['tickets-item__info']}>10:45 - 08:00</p>
          </div>
          <div className={styles['tickets-item__wrapper']}>
            <p className={styles['tickets-item__label']}>В пути</p>
            <p className={styles['tickets-item__info']}>21ч 15м</p>
          </div>
          <div className={styles['tickets-item__wrapper']}>
            <p className={styles['tickets-item__label']}>2 пересадки</p>
            <p className={styles['tickets-item__info']}>HKG, JNB</p>
          </div>
        </div>
        <div className={styles['tickets-item__way']}>
          <div className={styles['tickets-item__wrapper']}>
            <p className={styles['tickets-item__label']}>MOW - HKT</p>
            <p className={styles['tickets-item__info']}>11:20 - 00:50</p>
          </div>
          <div className={styles['tickets-item__wrapper']}>
            <p className={styles['tickets-item__label']}>В пути</p>
            <p className={styles['tickets-item__info']}>13ч 30м</p>
          </div>
          <div className={styles['tickets-item__wrapper']}>
            <p className={styles['tickets-item__label']}>1 пересадка</p>
            <p className={styles['tickets-item__info']}>HKG</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketsItem;

import React from 'react';
import { add, format } from 'date-fns';

import styles from './tickets-item.module.scss';

const TicketsItem = ({ ticket }) => {
  const { price, carrier, segments } = ticket;

  return (
    <div className={styles['tickets-item']}>
      <div className={styles['tickets-item__title']}>
        <p className={styles['tickets-item__price']}>{price} P</p>
        <img
          className={styles['tickets-item__logo']}
          src={`https://pics.avs.io/99/36/${carrier}.png`}
          alt="Логотип"
        />
      </div>
      <div className={styles['tickets-item__description']}>
        {segments.map((el, i) => {
          const departureTime = new Date(el.date);
          const arrivalTime = add(departureTime, { minutes: el.duration });

          return (
            <div key={i}>
              <div className={styles['tickets-item__way']}>
                <div className={styles['tickets-item__wrapper']}>
                  <p className={styles['tickets-item__label']}>
                    {`${el.origin} - ${el.destination}`.toLocaleUpperCase()}
                  </p>
                  <p className={styles['tickets-item__info']}>
                    {format(departureTime, 'HH:mm')} – {format(arrivalTime, 'HH:mm')}
                  </p>
                </div>
                <div className={styles['tickets-item__wrapper']}>
                  <p className={styles['tickets-item__label']}>{'В пути'.toLocaleUpperCase()}</p>
                  <p className={styles['tickets-item__info']}>
                    {Math.floor(el.duration / 60)}ч {el.duration % 60}м
                  </p>
                </div>
                <div className={styles['tickets-item__wrapper']}>
                  <p className={styles['tickets-item__label']}>
                    {(el.stops.length === 0
                      ? 'Без пересадок'
                      : el.stops.length === 1
                        ? `${el.stops.length} пересадка`
                        : `${el.stops.length} пересадки`
                    ).toLocaleUpperCase()}
                  </p>
                  <p className={styles['tickets-item__info']}>{el.stops.join(', ')}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TicketsItem;

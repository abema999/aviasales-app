import React from 'react';

import styles from './filter.module.scss';

const Filter = () => {
  return (
    <div className={styles['filter']}>
      <h2 className={styles['filter__title']}>{'Количество пересадок'.toUpperCase()}</h2>
      <ul className={styles['filter__list']}>
        <li className={styles['filter__item']}>
          <label className={styles['filter__label']}>
            <input className={styles['filter__checkbox']} type="checkbox" /> Все
            <span className={styles['filter__custom-checkbox']}></span>
          </label>
        </li>
        <li className={styles['filter__item']}>
          <label className={styles['filter__label']}>
            <input className={styles['filter__checkbox']} type="checkbox" /> Без пересадок
            <span className={styles['filter__custom-checkbox']}></span>
          </label>
        </li>
        <li className={styles['filter__item']}>
          <label className={styles['filter__label']}>
            <input className={styles['filter__checkbox']} type="checkbox" /> 1 пересадка
            <span className={styles['filter__custom-checkbox']}></span>
          </label>
        </li>
        <li className={styles['filter__item']}>
          <label className={styles['filter__label']}>
            <input className={styles['filter__checkbox']} type="checkbox" /> 2 пересадки
            <span className={styles['filter__custom-checkbox']}></span>
          </label>
        </li>
        <li className={styles['filter__item']}>
          <label className={styles['filter__label']}>
            <input className={styles['filter__checkbox']} type="checkbox" /> 3 пересадки
            <span className={styles['filter__custom-checkbox']}></span>
          </label>
        </li>
      </ul>
    </div>
  );
};

export default Filter;

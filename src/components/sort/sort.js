import React from 'react';

import styles from './sort.module.scss';

const Sort = () => {
  return (
    <div className={styles['sort']}>
      <ul className={styles['sort__list']}>
        <li className={[[styles['sort__item']], styles['sort__item--active']].join(' ')}>
          <button className={[styles['button'], styles['sort__button']].join(' ')}>
            {'Самый дешевый'.toUpperCase()}
          </button>
        </li>
        <li className={styles['sort__item']}>
          <button className={[styles['button'], styles['sort__button']].join(' ')}>
            {'Самый быстрый'.toUpperCase()}
          </button>
        </li>
        <li className={styles['sort__item']}>
          <button className={[styles['button'], styles['sort__button']].join(' ')}>
            {'Оптимальный'.toUpperCase()}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sort;

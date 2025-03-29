import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setSort } from '../../store/actions';

import styles from './sort.module.scss';

const Sort = () => {
  const sort = useSelector((state) => state.sort);
  const dispatch = useDispatch();

  const sortValues = [
    { key: 'cheap', label: 'Самый дешевый' },
    { key: 'fast', label: 'Самый быстрый' },
    { key: 'optimal', label: 'Оптимальный' },
  ];

  return (
    <div className={styles['sort']}>
      <ul className={styles['sort__list']}>
        {sortValues.map(({ key, label }) => (
          <li
            key={key}
            className={`${styles['sort__item']} ${sort === key ? styles['sort__item--active'] : ''}`}
          >
            <button
              className={[styles['button'], styles['sort__button']].join(' ')}
              onClick={() => dispatch(setSort(key))}
            >
              {label.toUpperCase()}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sort;

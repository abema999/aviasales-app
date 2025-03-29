import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { toggleAll, toggleTransfer } from '../../store/actions';

import styles from './filter.module.scss';

const Filter = () => {
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const transferValues = [0, 1, 2, 3];

  return (
    <div className={styles['filter']}>
      <h2 className={styles['filter__title']}>{'Количество пересадок'.toUpperCase()}</h2>
      <ul className={styles['filter__list']}>
        <li className={styles['filter__item']}>
          <label className={styles['filter__label']}>
            <input
              className={styles['filter__checkbox']}
              type="checkbox"
              checked={filter.all}
              onChange={() => dispatch(toggleAll())}
            />
            Все
            <span className={styles['filter__custom-checkbox']}></span>
          </label>
        </li>
        {transferValues.map((transferValue) => (
          <li key={transferValue} className={styles['filter__item']}>
            <label className={styles['filter__label']}>
              <input
                className={styles['filter__checkbox']}
                type="checkbox"
                checked={filter.transfers[transferValue]}
                onChange={() => dispatch(toggleTransfer(transferValue))}
              />
              {transferValue === 0
                ? 'Без пересадок'
                : transferValue === 1
                  ? `${transferValue} пересадка`
                  : `${transferValue} пересадки`}
              <span className={styles['filter__custom-checkbox']}></span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;

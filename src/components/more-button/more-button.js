import React from 'react';

import styles from './more-button.module.scss';

const MoreButton = () => {
  return (
    <button className={[[styles['button']], [styles['more-button']]].join(' ')}>
      {'Показать еще 5 билетов'.toUpperCase()}
    </button>
  );
};

export default MoreButton;

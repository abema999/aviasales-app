import React from 'react';

import logo from '../../assets/logo.svg';

import styles from './header.module.scss';

const Header = () => {
  return <img className={styles['logo']} src={logo} alt="Логотип" />;
};

export default Header;

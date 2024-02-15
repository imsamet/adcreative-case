import React from 'react';
import { Props } from './core/_models';
import styles from './core/style.module.css';

const NotFound: React.FC<Props> = ({}) => {
  return (
    <div className={styles.container}>
      <div className={styles.textBox}>
        <span className={styles.title}>Oops!</span>
        <span className={styles.description}>It seems something went wrong</span>
      </div>
      <img src="/404-error.svg" />
    </div>
  );
};
export default NotFound;

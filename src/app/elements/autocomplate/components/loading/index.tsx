import React from 'react';
import { Props } from './core/_models';
import styles from './core/style.module.css';

const Loading: React.FC<Props> = ({ isLoading }) => {
  return (
    isLoading && (
      <div className={styles.container}>
        <div className={styles.loadingWrapper}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    )
  );
};
export default Loading;

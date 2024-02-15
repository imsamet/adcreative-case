import React from 'react';
import { WithChildren } from '../../../core/_models';
import styles from './core/style.module.css';

const PageWrapper: React.FC<WithChildren> = ({ children }) => {
  return (
    <div className="container">
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default PageWrapper;

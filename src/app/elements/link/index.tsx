import React from 'react';
import styles from './core/style.module.css';
import cn from 'classnames';
import { Props } from './core/_model';
import { Link } from 'react-router-dom';

const ADLink: React.FC<Props> = ({ label, to, tabIndex, className }) => {
  return (
    <Link tabIndex={tabIndex} className={cn(styles.link, className)} to={to}>
      <span>{label}</span>
    </Link>
  );
};
export default ADLink;

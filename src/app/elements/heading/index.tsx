import React from 'react';
import cn from 'classnames';
import styles from './core/style.module.css';
import { Props } from './core/_models';

const Heading: React.FC<Props> = ({ type, className, label }) => {
  const Tag = type || 'h2';
  return <Tag className={cn(styles.heading, styles[type], className)}>{label}</Tag>;
};

export default Heading;

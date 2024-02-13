import React, { ReactNode } from 'react';
import styles from './style.module.css';
import cn from 'classnames';

type Props = {
  type?: 'primary' | 'secondary';
  children: ReactNode;
  className?: string;
};

const Button: React.FC<Props> = ({ type = 'primary', children, className, ...props }) => {
  return (
    <button className={cn(styles.button, styles[type], className)} {...props}>
      {children}
    </button>
  );
};
export default Button;

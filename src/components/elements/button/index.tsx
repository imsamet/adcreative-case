import React, { ReactNode } from 'react';
import styles from './style.module.css';
import cn from 'classnames';

type Props = {
  children: ReactNode;
  className?: string;
};

const Button: React.FC<Props> = ({ children, className, ...props }) => {
  return (
    <button className={cn(styles.button, className)} {...props}>
      {children}
    </button>
  );
};
export default Button;

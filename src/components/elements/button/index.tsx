import React from 'react';
import styles from './style.module.css';
import cn from 'classnames';
import { Icons } from '../icons/icon';
import { ButtonProps } from './_model';

const Button: React.FC<ButtonProps> = ({ label, icon, className, ...props }) => {
  return (
    <button className={cn(styles.button, className)} {...props}>
      {label}
      {icon && <Icons className={styles.icon} name={icon} />}
    </button>
  );
};
export default Button;

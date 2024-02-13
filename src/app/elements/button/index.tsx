import React from 'react';
import styles from './core/style.module.css';
import cn from 'classnames';
import { Icons } from '../icons/icon';
import { Props } from './core/_model';

const Button: React.FC<Props> = ({ label, icon, className, ...props }) => {
  return (
    <button className={cn(styles.button, className)} {...props}>
      {label}
      {icon && <Icons className={styles.icon} name={icon} />}
    </button>
  );
};
export default Button;

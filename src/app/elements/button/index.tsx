import React from 'react';
import styles from './core/style.module.css';
import cn from 'classnames';
import { Icons } from '../icons/icon';
import { Props } from './core/_model';

const Button: React.FC<Props> = ({ type, href, tabIndex, label, icon, className, ...props }) => {
  const Tag = type;
  return (
    <Tag href={href} tabIndex={tabIndex} className={cn(styles.button, className)} {...props}>
      {label}
      {icon && <Icons className={styles.icon} name={icon} />}
    </Tag>
  );
};
export default Button;

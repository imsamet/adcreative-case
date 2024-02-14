import React from 'react';
import { Props } from './core/_models';
import styles from './core/style.module.css';

const ListItem: React.FC<Props> = ({ id, name, image, episodes, checked, onClick }) => {
  return (
    <div onClick={() => onClick()} className={styles.container}>
      <input className={styles.input} type="checkbox" checked={checked} />
      <img src={image} className={styles.image} />
      <div className={styles.textBox}>
        <span className={styles.name}>{name}</span>
        <span className={styles.episode}>{episodes} Episodes</span>
      </div>
    </div>
  );
};
export default ListItem;

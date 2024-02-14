import React from 'react';
import { Props } from './core/_models';
import styles from './core/style.module.css';
import { useListView } from '../../../../modules/rick-and-morty/core/ListViewProvider';

const ListItem: React.FC<Props> = ({ id, name, image, episodes }) => {
  const { selected, removeSelect } = useListView();
  return (
    <div onClick={() => removeSelect(id)} className={styles.container}>
      <input className={styles.input} type="checkbox" checked={selected.some(i => id === i.id)} />
      <img src={image} className={styles.image} />
      <div className={styles.textBox}>
        <span className={styles.name}>{name}</span>
        <span className={styles.episode}>{episodes} Episodes</span>
      </div>
    </div>
  );
};
export default ListItem;

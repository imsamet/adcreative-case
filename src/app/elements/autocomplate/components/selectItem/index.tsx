import React from 'react';
import { Icons } from '../../../icons/icon';
import { Props } from './core/_models';
import styles from './core/style.module.css';
import { useListView } from '../../../../modules/rick-and-morty/core/ListViewProvider';

const SelectItem: React.FC<Props> = ({ id, label }) => {
  const { removeSelect } = useListView();
  return (
    <div className={styles.container}>
      <span className={styles.text}>{label}</span>
      <div className={styles.iconBox} onClick={() => removeSelect(id)}>
        <Icons className={styles.icon} name="CrossSquare" />
      </div>
    </div>
  );
};
export default SelectItem;

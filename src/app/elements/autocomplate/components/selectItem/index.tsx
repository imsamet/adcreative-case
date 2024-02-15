import React from 'react';
import { Icons } from '../../../icons/icon';
import { Props } from './core/_models';
import styles from './core/style.module.css';
import { useAppDispatch } from '../../../../../hooks/useRedux';
import { removeSelect } from '../../../../../store/reducer/rickAndMortySlice';

const SelectItem: React.FC<Props> = ({ id, label }) => {
  const dispatch = useAppDispatch();
  const handleRemoveItem = () => {
    dispatch(removeSelect(id));
  };
  return (
    <div className={styles.container}>
      <span className={styles.text}>{label}</span>
      <div className={styles.iconBox} onClick={handleRemoveItem}>
        <Icons className={styles.icon} name="CrossSquare" />
      </div>
    </div>
  );
};
export default SelectItem;

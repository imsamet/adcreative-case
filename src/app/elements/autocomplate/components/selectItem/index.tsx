import React from 'react';
import { Icons } from '../../../icons/icon';
import { Props } from './core/_models';
import styles from './core/style.module.css';
import { useAppDispatch } from '../../../../../hooks/useRedux';
import { removeSelect } from '../../../../../store/reducer/rickAndMortySlice';
import { handleEnterKey } from '../../../../../core/_functions';

const SelectItem: React.FC<Props> = ({ id, label, tabIndex }) => {
  const dispatch = useAppDispatch();
  const handleRemoveItem = () => {
    dispatch(removeSelect(id));
  };

  return (
    <div className={styles.container}>
      <span className={styles.text}>{label}</span>
      <div
        onKeyUp={e => handleEnterKey(e, handleRemoveItem)}
        tabIndex={tabIndex}
        className={styles.iconBox}
        onClick={handleRemoveItem}
      >
        <Icons className={styles.icon} name="CrossSquare" />
      </div>
    </div>
  );
};
export default SelectItem;

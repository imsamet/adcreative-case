import React from 'react';
import { Props } from './core/_models';
import styles from './core/style.module.css';
import { useAppDispatch, useAppSelector } from '../../../../../hooks/useRedux';
import { onSelect } from '../../../../../store/reducer/rickAndMortySlice';
import { handleEnterKey } from '../../../../../core/_functions';

const ListItem: React.FC<Props> = ({ item }) => {
  const { selected, query } = useAppSelector(state => state.rickAndMorty);
  const dispatch = useAppDispatch();
  const handleClickToggleItem = () => {
    dispatch(onSelect(item));
  };
  const BoldRender = () => {
    if (query !== '') {
      const str = item.name;
      const replaceValue = '|';
      const rep = str.toLocaleLowerCase().replaceAll(query.toLocaleLowerCase(), replaceValue);
      const arr = rep.split('');
      let lastIndex: number = 0;
      return arr.map((element: string) => {
        const nextLength = element === replaceValue ? query.length : 1;
        const val =
          element === replaceValue ? (
            <span className={styles.bold}>{str.slice(lastIndex, lastIndex + nextLength)}</span>
          ) : (
            <>{str.slice(lastIndex, lastIndex + nextLength)}</>
          );
        lastIndex = lastIndex + nextLength;
        return val;
      });
    } else {
      return item.name;
    }
  };
  return (
    <div onClick={handleClickToggleItem} className={styles.container}>
      <input
        onKeyUp={e => handleEnterKey(e, handleClickToggleItem)}
        className={styles.input}
        type="checkbox"
        checked={selected.some(i => item.id === i.id)}
      />
      <img src={item.image} className={styles.image} />
      <div className={styles.textBox}>
        <span className={styles.name}>{BoldRender()}</span>
        <span className={styles.episode}>{item.episode.length} Episodes</span>
      </div>
    </div>
  );
};
export default ListItem;

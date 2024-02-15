import React from 'react';
import styles from './core/style.module.css';
import cn from 'classnames';
import SelectItem from './components/selectItem';
import { Icons } from '../icons/icon';
import { useAppSelector } from '../../modules/rick-and-morty/core/hooks';
import SearchInput from './components/searchInput';
import List from './components/list';

const Autocomplate: React.FC = ({}) => {
  const state = useAppSelector(state => state.rickAndMorty);
  return (
    <div className={cn(styles.container)}>
      <div className={styles.head}>
        <div className={styles.selectList}>
          {state.selected.map(i => (
            <SelectItem key={i.id} id={i.id} label={i.name} />
          ))}
          <SearchInput />
        </div>
        <Icons className={styles.icon} name="Down" />
      </div>
      <List />
    </div>
  );
};
export default Autocomplate;

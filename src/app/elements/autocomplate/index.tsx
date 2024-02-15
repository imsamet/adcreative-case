import React, { useState } from 'react';
import styles from './core/style.module.css';
import cn from 'classnames';
import SelectItem from './components/selectItem';
import { Icons } from '../icons/icon';
import { useAppSelector } from '../../../hooks/useRedux';
import SearchInput from './components/searchInput';
import List from './components/list';

const Autocomplate: React.FC = ({}) => {
  const state = useAppSelector(state => state.rickAndMorty);
  const [isOpen, setOpen] = useState<boolean>(false);
  const toggle = () => {
    setOpen(prev => !prev);
  };
  return (
    <div className={cn(styles.container)}>
      <div className={styles.head}>
        <div className={styles.selectList}>
          {state.selected.map(i => (
            <SelectItem key={i.id} id={i.id} label={i.name} />
          ))}
          <SearchInput setOpen={setOpen} />
        </div>
        <div className={styles.toggleButton} onClick={toggle}>
          <Icons className={cn(styles.icon, isOpen && styles.open)} name="Down" />
        </div>
      </div>
      <List isOpen={isOpen} />
    </div>
  );
};
export default Autocomplate;

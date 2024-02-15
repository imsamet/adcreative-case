import React, { ChangeEvent } from 'react';
import styles from './core/style.module.css';
import cn from 'classnames';
import SelectItem from './components/selectItem';
import { Icons } from '../icons/icon';
import ListItem from './components/listItem';
import Loading from './components/loading';
import { useAppDispatch, useAppSelector } from '../../modules/rick-and-morty/core/hooks';
import { setQuery } from '../../modules/rick-and-morty/core/reducer/rickAndMortySlice';
import getRickAndMortyList from '../../modules/rick-and-morty/core/actions/getRickAndMortyList';
import NotFound from './components/notFound';

const Autocomplate: React.FC = ({}) => {
  const state = useAppSelector(state => state.rickAndMorty);
  const dispatch = useAppDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setQuery(e.target.value));
    dispatch(getRickAndMortyList(e.target.value));
  };
  return (
    <div className={cn(styles.container)}>
      <div className={styles.head}>
        <div className={styles.selectList}>
          {state.selected.map(i => (
            <SelectItem key={i.id} id={i.id} label={i.name} />
          ))}
          <input onChange={handleChange} className={styles.input} />
        </div>
        <Icons className={styles.icon} name="Down" />
      </div>
      <div className={styles.body}>
        <Loading isLoading={state.isLoading} />
        {state.rickAndMortyList ? (
          state.rickAndMortyList?.results.map(i => <ListItem key={i.id} item={i} />)
        ) : (
          <NotFound />
        )}
      </div>
    </div>
  );
};
export default Autocomplate;

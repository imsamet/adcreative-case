import React, { ChangeEvent, useCallback } from 'react';
import styles from './core/style.module.css';
import lodash from 'lodash';
import { useAppDispatch } from '../../../../modules/rick-and-morty/core/hooks';
import { setDebouncedLoading, setQuery } from '../../../../modules/rick-and-morty/core/reducer/rickAndMortySlice';
import getRickAndMortyList from '../../../../modules/rick-and-morty/core/actions/getRickAndMortyList';

const SearchInput: React.FC = ({}) => {
  const dispatch = useAppDispatch();

  const debouncedSave = useCallback(
    lodash.debounce((query: string) => {
      dispatch(setQuery(query));
      dispatch(getRickAndMortyList(query));
    }, 1000),
    [],
  );
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setDebouncedLoading());
    debouncedSave(e.target.value);
  };
  return <input onChange={handleChange} className={styles.input} />;
};
export default SearchInput;

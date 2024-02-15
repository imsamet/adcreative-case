import React, { ChangeEvent, useCallback } from 'react';
import styles from './core/style.module.css';
import lodash from 'lodash';
import { useAppDispatch } from '../../../../../hooks/useRedux';
import { setDebouncedLoading, setQuery } from '../../../../../store/reducer/rickAndMortySlice';
import getRickAndMortyList from '../../../../../store/actions/getRickAndMortyList';

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

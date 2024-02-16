import React, { ChangeEvent, useCallback } from 'react';
import styles from './core/style.module.css';
import lodash from 'lodash';
import { useAppDispatch } from '../../../../../hooks/useRedux';
import { setDebouncedLoading, setQuery } from '../../../../../store/reducer/rickAndMortySlice';
import getRickAndMortyList from '../../../../../store/actions/getRickAndMortyList';
import { Props } from './core/_models';

const SearchInput: React.FC<Props> = ({ setOpen, tabIndex }) => {
  const dispatch = useAppDispatch();

  const debouncedSave = useCallback(
    lodash.debounce((query: string) => {
      dispatch(setQuery(query));
      dispatch(getRickAndMortyList(query));
    }, 1000),
    [],
  );
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setOpen(true);
    dispatch(setDebouncedLoading());
    debouncedSave(e.target.value);
  };
  return <input tabIndex={tabIndex} onChange={handleChange} className={styles.input} />;
};
export default SearchInput;

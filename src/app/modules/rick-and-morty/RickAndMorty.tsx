import Autocomplate from '../../elements/autocomplate';
import { useEffect } from 'react';
import getRickAndMortyList from '../../../store/actions/getRickAndMortyList';
import { useAppDispatch } from '../../../hooks/useRedux';

const RickAndMortyWrapper = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getRickAndMortyList(''));
  }, []);
  return (
    <>
      <Autocomplate />
    </>
  );
};

export { RickAndMortyWrapper };

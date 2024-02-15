import Autocomplate from '../../elements/autocomplate';
import { useEffect } from 'react';
import getRickAndMortyList from '../../../store/actions/getRickAndMortyList';
import { useAppDispatch } from '../../../hooks/useRedux';
import Heading from '../../elements/heading';

const RickAndMortyWrapper = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getRickAndMortyList(''));
  }, []);
  return (
    <>
      <Heading type="h1" label="AdCreative Autocomplate Case" />
      <Autocomplate />
    </>
  );
};

export { RickAndMortyWrapper };

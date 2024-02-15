import { Provider } from 'react-redux';
import Autocomplate from '../../elements/autocomplate';
import { store } from './core/store';
import { useEffect } from 'react';
import getRickAndMortyList from './core/actions/getRickAndMortyList';
import { useAppDispatch } from './core/hooks';

const RickAndMortyList = () => {
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

const RickAndMortyWrapper = () => (
  <Provider store={store}>
    <RickAndMortyList />;
  </Provider>
);

export { RickAndMortyWrapper };

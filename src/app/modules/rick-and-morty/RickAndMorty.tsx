import Autocomplate from '../../elements/autocomplate';
import { ListViewProvider } from './core/ListViewProvider';

const RickAndMortyList = () => {
  return (
    <>
      <Autocomplate />
    </>
  );
};

const RickAndMortyWrapper = () => (
  <ListViewProvider>
    <RickAndMortyList />
  </ListViewProvider>
);

export { RickAndMortyWrapper };

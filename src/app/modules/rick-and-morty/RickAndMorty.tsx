import Autocomplate from '../../elements/autocomplate';
import { useEffect } from 'react';
import getRickAndMortyList from '../../../store/actions/getRickAndMortyList';
import { useAppDispatch } from '../../../hooks/useRedux';
import Heading from '../../elements/heading';
import styles from './core/style.module.css';

const RickAndMortyWrapper = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getRickAndMortyList(''));
  }, []);
  return (
    <div className="container">
      <div className={styles.content}>
        <Heading className="text-center" type="h1" label="AdCreative Autocomplate Case" />
        <Autocomplate />
      </div>
    </div>
  );
};

export { RickAndMortyWrapper };

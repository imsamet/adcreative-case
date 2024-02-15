import Autocomplate from '../../elements/autocomplate';
import { useEffect } from 'react';
import getRickAndMortyList from '../../../store/actions/getRickAndMortyList';
import { useAppDispatch } from '../../../hooks/useRedux';
import Heading from '../../elements/heading';
import PageWrapper from '../page-wrapper';

const RickAndMortyWrapper = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getRickAndMortyList(''));
  }, []);
  return (
    <PageWrapper>
      <Heading type="h1" label="AdCreative Autocomplate Case" />
      <Autocomplate />
    </PageWrapper>
  );
};

export { RickAndMortyWrapper };

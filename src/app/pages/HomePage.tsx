import PageWrapper from '../modules/page-wrapper';
import { RickAndMortyWrapper } from '../modules/rick-and-morty/RickAndMorty';

const HomePage = () => {
  return (
    <PageWrapper>
      <RickAndMortyWrapper />
    </PageWrapper>
  );
};

export default HomePage;

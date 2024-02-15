import React from 'react';
import styles from './core/style.module.css';
import { useAppDispatch, useAppSelector } from '../../../../modules/rick-and-morty/core/hooks';
import usePageQueryParam from '../../../../../hooks/usePageQueryParam';
import getRickAndMortyListNextPage from '../../../../modules/rick-and-morty/core/actions/getRickAndMortyListNextPage';
import Loading from '../loading';
import ListItem from '../listItem';
import NotFound from '../notFound';

const List: React.FC = ({}) => {
  const state = useAppSelector(state => state.rickAndMorty);
  const dispatch = useAppDispatch();
  const handleScroll = (e: any) => {
    if (state.rickAndMortyList?.info.next) {
      const { scrollTop, clientHeight, scrollHeight } = e.target;
      const page = usePageQueryParam(state.rickAndMortyList.info.next);
      scrollHeight - (scrollTop + clientHeight) == 0 &&
        dispatch(getRickAndMortyListNextPage({ name: state.query, page }));
    }
  };
  const SelectsListRender = () => {
    return (
      <>
        {state.selected.map(i => (
          <ListItem key={i.id} item={i} />
        ))}
        {state.rickAndMortyList?.results
          .filter(i => !state.selected.some(s => s.id === i.id))
          .map(i => (
            <ListItem key={i.id} item={i} />
          ))}
      </>
    );
  };
  return (
    <div className={styles.body} onScroll={handleScroll}>
      <Loading isLoading={state.isLoading} />
      {
        //state.rickAndMortyList ? SelectsListRender() : <NotFound />
      }
      {state.rickAndMortyList ? (
        state.rickAndMortyList?.results.map(i => <ListItem key={i.id} item={i} />)
      ) : (
        <NotFound />
      )}
    </div>
  );
};
export default List;

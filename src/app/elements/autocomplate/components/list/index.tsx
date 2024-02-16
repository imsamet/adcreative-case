import React from 'react';
import styles from './core/style.module.css';
import { useAppDispatch, useAppSelector } from '../../../../../hooks/useRedux';
import usePageQueryParam from '../../../../../hooks/usePageQueryParam';
import getRickAndMortyListNextPage from '../../../../../store/actions/getRickAndMortyListNextPage';
import Loading from '../loading';
import ListItem from '../listItem';
import NotFound from '../notFound';
import { Props } from './core/_models';
import cn from 'classnames';

const List: React.FC<Props> = ({ isOpen }) => {
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
  // const SelectsListRender = () => {
  //   return (
  //     <>
  //       {state.selected.map(i => (
  //         <ListItem key={i.id} item={i} />
  //       ))}
  //       {state.rickAndMortyList?.results
  //         .filter(i => !state.selected.some(s => s.id === i.id))
  //         .map(i => (
  //           <ListItem key={i.id} item={i} />
  //         ))}
  //     </>
  //   );
  // };
  return (
    <div className="relative">
      <Loading isLoading={state.isLoading} />
      <div className={cn(styles.body, isOpen && styles.open)} onScroll={handleScroll}>
        {
          //state.rickAndMortyList ? SelectsListRender() : <NotFound />
        }
        {state.rickAndMortyList ? (
          state.rickAndMortyList?.results.map(i => <ListItem key={i.id} item={i} />)
        ) : (
          <NotFound />
        )}
      </div>
    </div>
  );
};
export default List;

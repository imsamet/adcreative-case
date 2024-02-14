import React from 'react';
import styles from './core/style.module.css';
import cn from 'classnames';
import SelectItem from './components/selectItem';
import { Icons } from '../icons/icon';
import ListItem from './components/listItem';
import Loading from './components/loading';
import {
  useListView,
  useQueryResponseData,
  useQueryResponseLoading,
} from '../../modules/rick-and-morty/core/ListViewProvider';

const Autocomplate: React.FC = ({}) => {
  const { selected } = useListView();
  const RickAndMortyData = useQueryResponseData();
  const isLoading = useQueryResponseLoading();
  return (
    <div className={cn(styles.container)}>
      <div className={styles.head}>
        <div className={styles.selectList}>
          {selected.map(i => (
            <SelectItem key={i.id} id={i.id} label={i.name} />
          ))}
          <input className={styles.input} />
        </div>
        <Icons className={styles.icon} name="Down" />
      </div>
      <div className={styles.body}>
        {RickAndMortyData.map(i => (
          <ListItem id={i.id} name={i.name} episodes={i.episode.length} image={i.image} />
        ))}
      </div>
      <Loading isLoading={isLoading} />
    </div>
  );
};
export default Autocomplate;

import React, { useState } from 'react';
import styles from './core/style.module.css';
import cn from 'classnames';
import { DataModel, Props, Select } from './core/_model';
import SelectItem from './components/selectItem';
import { Icons } from '../icons/icon';
import ListItem from './components/listItem';
import Loading from './components/loading';

const Autocomplate: React.FC<Props> = ({ loading, data }) => {
  const [select, setSelect] = useState<Select>([]);
  const removeSelect = (id: number) => {
    setSelect((prev: Select) => prev.filter(i => i.id !== id));
  };
  const addSelect = (item: DataModel) => {
    const addItem = {
      id: item.id,
      label: item.name,
    };
    setSelect((prev: Select) => {
      if (prev) {
        return prev.some(i => i.id === addItem.id) ? prev.filter(i => !(i.id === addItem.id)) : [...prev, addItem];
      } else {
        return [addItem];
      }
    });
  };
  return (
    <div className={cn(styles.container)}>
      <div className={styles.head}>
        <div className={styles.selectList}>
          {select.map(i => (
            <SelectItem onClick={removeSelect} key={i.id} id={i.id} label={i.label} />
          ))}
          <input className={styles.input} />
        </div>
        <Icons className={styles.icon} name="Down" />
      </div>
      <div className={styles.body}>
        {data.results.map(i => (
          <ListItem
            onClick={() => addSelect(i)}
            id={i.id}
            name={i.name}
            episodes={i.episode.length}
            image={i.image}
            checked={select.some(s => i.id === s.id)}
          />
        ))}
      </div>
      <Loading isLoading={loading} />
    </div>
  );
};
export default Autocomplate;

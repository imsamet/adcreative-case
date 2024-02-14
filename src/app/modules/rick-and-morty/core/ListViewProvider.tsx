/* eslint-disable react-refresh/only-export-components */
import { FC, useState, createContext, useContext, useMemo } from 'react';
import { ID, ResponseData, WithChildren } from '../../../../constants/_models';
import { initialListView } from './_constants';
import { ListViewContextProps } from './_models';
import { getRickAndMorty } from './_requests';
import { useQuery } from 'react-query';

const ListViewContext = createContext<ListViewContextProps>(initialListView);

const ListViewProvider: FC<WithChildren> = ({ children }) => {
  const [selected, setSelected] = useState<Array<ResponseData>>(initialListView.selected);
  const [query, setQuery] = useState<string>('');
  const { data: response, isLoading, error } = useQuery(['name', query], () => getRickAndMorty(query));
  return (
    <ListViewContext.Provider
      value={{
        response,
        selected,
        onSelect: (item: ResponseData) => {
          setSelected((prev: ResponseData[]) => {
            if (prev) {
              return prev.some(i => i.id === item.id) ? prev.filter(i => !(i.id === item.id)) : [...prev, item];
            } else {
              return [item];
            }
          });
        },
        removeSelect: (id: ID) => {
          setSelected((prev: ResponseData[]) => prev.filter(i => i.id !== id));
        },
        query,
        setQuery,
        isLoading,
        error,
      }}
    >
      {children}
    </ListViewContext.Provider>
  );
};

const useListView = () => useContext(ListViewContext);

const useQueryResponseData = () => {
  const { response } = useListView();
  const memoizedResponse = useMemo(() => {
    if (!response) {
      return [];
    }

    return response.results || [];
  }, [response]);

  return memoizedResponse;
};

const useQueryResponseLoading = (): boolean => {
  const { isLoading } = useListView();
  return isLoading;
};

export { ListViewProvider, useListView, useQueryResponseLoading, useQueryResponseData };

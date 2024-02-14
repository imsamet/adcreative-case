import { ApiQueryResponse, ID, ResponseData } from '../../../../constants/_models';

export type ListViewContextProps = {
  response: ApiQueryResponse | undefined;
  selected: Array<ResponseData>;
  onSelect: (item: ResponseData) => void;
  removeSelect: (id: ID) => void;
  query: string;
  setQuery: Function;
  isLoading: boolean;
  error: any;
};

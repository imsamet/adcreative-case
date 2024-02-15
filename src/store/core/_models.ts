import { ApiQueryResponse, ResponseData } from '../../core/_models';

export interface RickAndMortyState {
  rickAndMortyList: ApiQueryResponse | null;
  selected: ResponseData[];
  query: string;
  isLoading: boolean;
  error: Error | null;
}

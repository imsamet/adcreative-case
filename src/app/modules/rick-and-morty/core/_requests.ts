import axios, { AxiosResponse } from 'axios';
import { ApiQueryResponse } from '../../../../core/_models';

const API_URL = import.meta.env.VITE_APP_THEME_API_URL;
const GET_RICK_AND_MORTY_URL = `${API_URL}/character`;

export const getRickAndMorty = (name: string, page?: number): Promise<ApiQueryResponse> => {
  return axios
    .get(GET_RICK_AND_MORTY_URL, {
      headers: {},
      params: {
        name,
        page,
      },
    })
    .then((d: AxiosResponse<ApiQueryResponse>) => d.data);
};

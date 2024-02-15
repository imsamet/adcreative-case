import axios, { AxiosResponse } from 'axios';
import { ApiQueryResponse } from '../../../../constants/_models';

const API_URL = import.meta.env.VITE_APP_THEME_API_URL;
const GET_RICK_AND_MORTY_URL = `${API_URL}/character`;

export const getRickAndMorty = (name: string): Promise<ApiQueryResponse> => {
  return axios
    .get(GET_RICK_AND_MORTY_URL, {
      headers: {},
      params: {
        name: name,
      },
    })
    .then((d: AxiosResponse<ApiQueryResponse>) => d.data);
};

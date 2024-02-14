import { ReactNode } from 'react';

export type ID = number;

export type PaginationState = {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
};

export type Response<T> = {
  info: PaginationState;
  results: T;
};

export type ResponseData = {
  id: ID;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export type ApiQueryResponse = Response<Array<ResponseData>>;

export type WithChildren = {
  children: ReactNode;
};

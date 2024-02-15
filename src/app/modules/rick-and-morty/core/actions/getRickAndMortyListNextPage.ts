import { createAsyncThunk } from '@reduxjs/toolkit';
import { getRickAndMorty } from '../_requests';

const getRickAndMortyListNextPage = createAsyncThunk(
  'rickAndMorty/listNextPage',
  async (data: { name: string; page: number }, { rejectWithValue }) => {
    try {
      const response = await getRickAndMorty(data.name, data.page);
      return response;
    } catch (e) {
      return rejectWithValue(e);
    }
  },
);

export default getRickAndMortyListNextPage;

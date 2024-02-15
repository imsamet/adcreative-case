import { createAsyncThunk } from '@reduxjs/toolkit';
import { getRickAndMorty } from '../core/_requests';

const getRickAndMortyList = createAsyncThunk('rickAndMorty/list', async (data: string, { rejectWithValue }) => {
  try {
    const response = await getRickAndMorty(data);
    return response;
  } catch (e) {
    return rejectWithValue(e);
  }
});

export default getRickAndMortyList;

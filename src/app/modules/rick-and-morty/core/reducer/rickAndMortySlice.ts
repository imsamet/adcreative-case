import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ApiQueryResponse, ResponseData } from '../../../../../core/_models';
import getRickAndMortyList from '../actions/getRickAndMortyList';

export interface RickAndMortyState {
  rickAndMortyList: ApiQueryResponse | null;
  selected: ResponseData[];
  query: string;
  isLoading: boolean;
  error: Error | null;
}

const initialState: RickAndMortyState = {
  rickAndMortyList: null,
  selected: [],
  query: '',
  isLoading: false,
  error: null,
};

export const rickAndMortySlice = createSlice({
  name: 'rickAndMorty',
  initialState,
  reducers: {
    onSelect: (state, action: PayloadAction<ResponseData>) => {
      state.selected.some(i => i.id === action.payload.id)
        ? state.selected.filter(i => !(i.id === action.payload.id))
        : state.selected.push(action.payload);
    },
    removeSelect: (state, action: PayloadAction<number>) => {
      state.selected.filter(i => i.id !== action.payload);
    },
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(getRickAndMortyList.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getRickAndMortyList.fulfilled, (state, action) => {
      state.rickAndMortyList = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getRickAndMortyList.rejected, (state, action) => {
      state.isLoading = false;
      state.rickAndMortyList = null;
      state.error = action.payload;
    });
  },
});

export const { onSelect, removeSelect, setQuery } = rickAndMortySlice.actions;
export default rickAndMortySlice.reducer;

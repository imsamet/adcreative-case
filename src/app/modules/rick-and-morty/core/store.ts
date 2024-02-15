import { configureStore } from '@reduxjs/toolkit';
import rickAndMortyReducer from './reducer/rickAndMortySlice';

export const store = configureStore({
  reducer: {
    rickAndMorty: rickAndMortyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

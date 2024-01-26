import { configureStore } from '@reduxjs/toolkit';
import filmsReducer from '../slice/filmsSlice';

const store = configureStore({
  reducer: {
    films: filmsReducer,
  },
});

export default store;
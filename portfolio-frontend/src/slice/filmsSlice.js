import { createSlice } from '@reduxjs/toolkit';

const filmsSlice = createSlice({
    name: 'films',
    initialState: [],
    reducers: {
        setFilms: (state, action) => {
            return action.payload;
        }
    }
})

export const { setFilms } = filmsSlice.actions;
export default filmsSlice.reducer;
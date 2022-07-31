import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from "./slices/counter";
import { pokemonSlice } from './slices/pokemon/pokemon';

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemon: pokemonSlice.reducer
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
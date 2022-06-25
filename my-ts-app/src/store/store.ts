import { configureStore } from '@reduxjs/toolkit'
import CurrencyReducer from '../slice/currencySlice'

export const store = configureStore({
    reducer: CurrencyReducer,
  })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
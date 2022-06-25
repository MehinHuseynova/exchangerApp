import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CurrencyState {
  baseCurrrency: string
  symbols: object
}

const initialState: CurrencyState = {
  baseCurrrency: '',
  symbols: {},
}

export const CurrencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    SetBaseCurrency: (state, payload) => {
      state.baseCurrrency = payload.payload
    },
    SetSymbols: (state, payload) => {
      state.symbols = payload.payload
    }
  },
})

export const { SetBaseCurrency,SetSymbols } = CurrencySlice.actions
export default CurrencySlice.reducer
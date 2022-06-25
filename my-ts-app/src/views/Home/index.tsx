import React, { FormEvent, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { SetBaseCurrency, SetSymbols } from '../../slice/currencySlice'
import { Link } from 'react-router-dom'
import { RootState } from '../../store/store'
const { v4: uuidv4 } = require('uuid');


const Home = () => {
  const dispatch = useDispatch()
  const symbols = useSelector((state: RootState) => state.symbols)
  const baseCurrencyByUserLocation = useSelector((state: RootState) => state.baseCurrrency)
  const getUserBaseCurrency = async () => {

    const { data: symbols } = await axios.get('https://api.exchangerate.host/symbols')
    const { data: baseCurrency } = await axios.get('https://ipapi.co/currency/')
    if (baseCurrency) {
      dispatch(SetBaseCurrency(baseCurrency))
    }

    if (symbols) {
      dispatch(SetSymbols(symbols.symbols))
    }
  }

  useEffect(() => {
    getUserBaseCurrency()
  }, [])

  return (
    <div className="w-full p-2">
      <div className="flex w-full justify-end">
        <div className='space-x-6 h-[40vh]'>
          <Link to="/converter">Converter</Link>
          <Link to="/exchangeRates">Exchange Rates</Link>
        </div>
      </div>
      <div className="text-center ">
        <h5 className="text-center my-2">Your current base currency is {baseCurrencyByUserLocation}. You can change it</h5>
        <select value={baseCurrencyByUserLocation}  className="bg-blue-200 border border-blue-500 rounded mx-2 p-2 text-blue-800" onChange={(e) => dispatch(SetBaseCurrency(e.target.value))}>
          <option value='' selected disabled> Change your base currency</option>
          {Object.keys(symbols).map((sym) => (
            <option key={uuidv4()} value={sym} >{sym}</option>
          ))}
        </select>

      </div>
    </div>

  )
}

export default Home
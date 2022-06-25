import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import axios from 'axios'

interface IRate {
  [key: string]: string
}
const ExchangeRates = () => {
  const baseCurrencyByUserLocation = useSelector((state: RootState) => state.baseCurrrency)
  const [rates, setRates] = useState<IRate>({})
  const handleDisplayingFreshCurrencyRates = async () => {
    const { data: latestData } = await axios.get(`https://api.exchangerate.host/latest?base=${baseCurrencyByUserLocation}`)
    setRates(latestData.rates)
  }

  useEffect(() => {
    handleDisplayingFreshCurrencyRates()
  }, [baseCurrencyByUserLocation])

  return (
    <div className='p-3'>
      <h1 className="text-2xl text-center my-2 uppercase">Current exchange rates</h1>
      <h4 className="text-center my-1 uppercase">{`Rates for 1 ${baseCurrencyByUserLocation}`}</h4>
      <div className='flex flex-wrap align-middle justify-center mt-10'>
        {Object.keys(rates).map((rateKey) => {
          return (
            <div className="border rounded-sm border-sky-500 p-2 w-60">
              <div className='text-center' >
                <h4 className="text-red-500"></h4>
                <h4>{rates[rateKey]} {rateKey}</h4>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}


export default ExchangeRates
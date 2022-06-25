import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { RootState } from '../../store/store'
const { v4: uuidv4 } = require('uuid');



const Converter = () => {
    const symbols = useSelector((state: RootState) => state.symbols)
    const [amount, setAmount] = useState('')
    const baseCurrencyByUserLocation = useSelector((state: RootState) => state.baseCurrrency)
    const [result, setResult] = useState('')
    const [selectedCurrency, setSelectedBaseCurrency] = useState('')

    const handleConvertation = async () => {
        const { data } = await axios.get(`https://api.exchangerate.host/convert?from=${baseCurrencyByUserLocation}&to=${selectedCurrency}&amount=${amount}`)
        setResult(`${data.result} ${selectedCurrency}`)
    }

    useEffect(() => {
        if (amount && selectedCurrency) {
            handleConvertation()
        }
    }, [selectedCurrency, amount])

    return (
        <div className='h-[100vh] flex flex-col align-middle justify-center' >
            <div>
                <h1 className='block my-3 text-lg text-blue-700 uppercase text-center'>Type amount and currency symbol to convert</h1>
                <div className="w-full flex  justify-center align-middle h-50 my-2">
                    <input className="border border-blue-500 p-3 rounded" value={amount} placeholder="amount" prefix={baseCurrencyByUserLocation} onChange={(e) => setAmount(e.target.value)} type="number" />
                    <select value={selectedCurrency} className="bg-blue-200 border border-blue-500 rounded mx-2 p-2 text-blue-800" onChange={(e) => setSelectedBaseCurrency(e.target.value)} placeholder='select'>
                        <option value="" disabled selected>Select your option</option>
                        {Object.keys(symbols).map((sym) => (
                            <option key={uuidv4()} value={sym} >{sym}</option>
                        ))}
                    </select>
                </div>
                {result && <h1 className='block text-center'>Result  :1  {baseCurrencyByUserLocation} = {result}</h1>}
            </div>
        </div>
    )
}

export default Converter
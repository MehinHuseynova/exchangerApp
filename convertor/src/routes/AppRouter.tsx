import React, { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router'

const HomePage = lazy(() => import('../views/Home/index'))
const ConverterPage = lazy(() => import('../views/Converter/index'))
const ExchangeRatesPage = lazy(() => import('../views/ExcangeRates/index'))

export const AppRouter = () => {

    return (
        <Suspense fallback={<div>loading...</div>}>

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/converter" element={<ConverterPage />} />
                <Route path="/exchangeRates" element={<ExchangeRatesPage />} />

            </Routes>
        </Suspense>
    )
}

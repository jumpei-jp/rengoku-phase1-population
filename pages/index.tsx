import type { NextPage } from 'next'
import React from 'react'
import CompareChart from '../components/CompareMultipleSeries'
import Prefecture from '../components/GetPrefecture'

const Home: NextPage = () => {
    return (
        <>
            <Prefecture />
            <h1>総人口推移グラフ</h1>
            <CompareChart />
        </>
    )
}

export default Home

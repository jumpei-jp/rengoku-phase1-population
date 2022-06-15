import type { NextPage } from 'next'
import React from 'react'
import CompareChart from '../components/CompareMultipleSeries'

const Home: NextPage = () => {
    return (
        <>
            <h1>総人口推移グラフ</h1>
            <CompareChart />
        </>
    )
}

export default Home

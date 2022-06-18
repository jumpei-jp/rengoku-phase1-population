import type { NextPage } from 'next'
import React from 'react'
import Prefecture from '../components/GetPrefecture'

const Home: NextPage = () => {
    return (
        <>
            <h1>総人口推移グラフ</h1>
            <Prefecture />
        </>
    )
}

export default Home

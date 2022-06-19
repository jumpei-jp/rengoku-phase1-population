import type { NextPage } from 'next'
import React from 'react'
import Prefecture from '../components/GetPrefecture'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
    return (
        <>
            <div className={styles.container}>
                <header>
                    <h2 className={styles.tytle}>総人口推移グラフ</h2>
                </header>
                <Prefecture />
            </div>
        </>
    )
}

export default Home

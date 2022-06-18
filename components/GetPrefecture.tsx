import { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import CompareChart from './CompareMultipleSeries'

export default function Prefecture() {
    const [prefectures, setPrefecture] = useState<Pref[]>([])
    const [populations, setPopulation] = useState<Population[]>([])
    type Pref = {
        prefCode: number
        prefName: string
    }
    type Population = {
        prefCode: number
        prefName: string
        data: {
            year: number
            value: number
        }[]
    }
    //都道府県情報を取得
    useEffect(() => {
        const fetchPrefecture = async () => {
            const response = await fetch('/api/prefectures/prefecture')
            const data = await response.json()
            setPrefecture(data.result) //prefectureの中に取得したデータを入れる
        }
        fetchPrefecture()
    }, [])

    // チェックボックスに変化があった時
    const handleOnChange = (
        prefName: string,
        prefCode: number,
        isChecked: boolean
    ) => {
        // 人口とそれに対応する都道府県情報を追加する
        let prefPopulation = populations.slice()

        // もしチェックが入ったならデータの取得、チェックが外れたならデータを削除
        if (isChecked) {
            getPopulation(prefName, prefCode)
        } else {
            const deletedPopulation = populations.findIndex(
                (v) => v.prefCode === prefCode
            )
            prefPopulation.splice(deletedPopulation, 1)
            setPopulation(prefPopulation)
        }
    }
    //人口を取得する
    const getPopulation = async (prefName: string, prefCode: number) => {
        const fetchPopulation = async () => {
            const response = await fetch(`api/populations/${prefCode}`)
            const result = await response.json()

            // 人口とそれに対応する都道府県情報を追加する
            let prefPopulation = populations.slice()

            prefPopulation.push({
                prefName: prefName,
                prefCode: prefCode,
                data: result,
            })
            setPopulation(prefPopulation)
        }

        fetchPopulation()
    }
    type PopulationData = {
        prefName: string
        prefCode: number
        data: {
            year: number
            value: number
        }[]
    }

    return (
        <>
            <div className={styles.grid}>
                {prefectures.map((pref: Pref, index) => (
                    <div key={pref.prefCode} className={styles.checkbox}>
                        <input
                            type="checkbox"
                            value={pref.prefName}
                            onChange={(event) =>
                                handleOnChange(
                                    pref.prefName,
                                    pref.prefCode,
                                    event.target.checked
                                )
                            }
                        />
                        {pref.prefName}
                    </div>
                ))}
            </div>
            <div>
                <CompareChart populationdata={populations}></CompareChart>
            </div>
        </>
    )
}

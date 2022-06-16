import { useState, useEffect } from 'react'

export default function Prefecture() {
    const [prefectures, setPrefecture] = useState([])
    useEffect(() => {
        const fetchPrefecture = async () => {
            const response = await fetch('/api/prefectures/prefecture')
            const data = await response.json()
            setPrefecture(data.result) //prefectureの中に取得したデータを入れる
        }
        fetchPrefecture()
    }, [])

    type Pref = {
        prefCode: number
        prefName: string
    }

    return (
        <>
            <ul>
                {prefectures.map((pref: Pref) => (
                    <p key={pref.prefCode}>
                        {`${pref.prefCode}: ${pref.prefName}`}
                    </p>
                ))}
            </ul>
        </>
    )
}

import { useState, useEffect } from 'react'

export default function Prefecture() {
    const [prefectures, setPrefecture] = useState([])

    //都道府県情報を取得
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
                    <div key={pref.prefCode}>
                        <input type="checkbox" />
                        {pref.prefCode}.{pref.prefName}
                    </div>
                ))}
            </ul>
        </>
    )
}

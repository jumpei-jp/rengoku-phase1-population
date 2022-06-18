import { useState, useEffect } from 'react'

export default function Prefecture() {
    const [prefectures, setPrefecture] = useState<Pref[]>([])
    type Pref = {
        prefCode: number
        prefName: string
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
        console.log(prefCode + ':' + prefName + 'に変化がありました。')
        console.log(isChecked)
    }
    return (
        <>
            {prefectures.map((pref: Pref, index) => (
                <div key={pref.prefCode}>
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
                    {pref.prefCode}.{pref.prefName}.{index}
                </div>
            ))}
        </>
    )
}

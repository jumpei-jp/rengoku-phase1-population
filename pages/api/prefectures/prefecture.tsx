const Prefecture = async (req: any, res: any) => {
    type Response = {
        method: 'GET'
        headers: {
            'X-API-KEY': string
        }
    }

    //都道府県名、都道府県コードを取得
    const response = await fetch(
        `https://opendata.resas-portal.go.jp/api/v1/prefectures`,
        {
            method: 'GET',
            headers: {
                'X-API-KEY': '3U4qwUJkm2IuBHPxO4wc3MQ7aocqNCF0kjCSVVhR',
            },
        }
    )
    //apiを叩いた結果をdataに入れてステータスコード200でjsonで返す
    const data = await response.json()
    res.status(200).json(data)
}

export default Prefecture

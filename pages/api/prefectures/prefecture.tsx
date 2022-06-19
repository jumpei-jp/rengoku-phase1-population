const Prefecture = async (req: any, res: any) => {
    // 都道府県名、都道府県コードを取得
    const url = `https://opendata.resas-portal.go.jp/api/v1/prefectures`
    const params: Params = {
        method: 'GET',
        headers: { 'X-API-KEY': process.env.OPEN_POPULATION_API_KEY },
    }
    const response = await fetch(url, params)

    type Params = {
        method: string
        headers: {
            'X-API-KEY': string
        }
    }

    //apiを叩いた結果をdataに入れてステータスコード200でjsonで返す
    const data = await response.json()
    res.status(200).json(data)
}

export default Prefecture

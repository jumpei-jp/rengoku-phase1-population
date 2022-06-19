const Population = async (req: any, res: any) => {
    //人口を取得
    const url = `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?&prefCode=${req.query.id}`
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

    //APIの結果を返す
    const data = await response.json()

    res.status(200).json(data.result.data[0]) //対象都道府県の総人口のみを取得
}

export default Population

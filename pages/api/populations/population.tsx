const Population = async (req: any, res: any) => {
    //人口を取得
    // TODO: 環境変数を呼び出すようにする
    const response = await fetch(
        `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?&prefCode=1`,
        {
            method: 'GET',
            headers: {
                'X-API-KEY': '3U4qwUJkm2IuBHPxO4wc3MQ7aocqNCF0kjCSVVhR',
            },
        }
    )

    //APIの結果を返す
    const data = await response.json()

    res.status(200).json(data.result.data[0]) //対象都道府県の総人口のみを取得
}

export default Population

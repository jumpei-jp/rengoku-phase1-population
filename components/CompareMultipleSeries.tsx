import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import HighchartsMore from 'highcharts/highcharts-more'
import React from 'react'

const CompareChart = (populationdata: any) => {
    if (typeof Highcharts === 'object') {
        HighchartsMore(Highcharts)
    }

    let series = []

    // 現在取得している都道府県情報をseriesに入れてグラフに反映させる
    for (let i = 0; i < populationdata.populationdata.length; i++) {
        let setData = populationdata.populationdata[i].data.data

        series.push({
            name: populationdata.populationdata[i].prefName,
            data: [
                setData[4].value, // 1980
                setData[6].value, // 1990
                setData[8].value, // 2000
                setData[10].value, // 2010
                setData[12].value, // 2020
            ],
        })
    }

    type Options = {
        title: object
        yAxis: object
        xAxis: object
        legend: object
        plotOptions: object
        series: {
            name: string
            data: number[]
        }[]
    }

    let options: Options = {
        title: {
            text: '各都道府県の人口増加数',
        },

        //Y軸
        yAxis: {
            floor: 0,
            ceiling: 15000000,
            title: {
                text: '人口数',
            },
            offset: 50, //plotエリアからの距離
            tickAmount: 8, //横軸に合計でいくつ目盛りを設置するのか
            tickInterval: 1000000, //横軸の目盛りのインターバル
        },

        //X軸
        xAxis: {
            accessibility: {
                rangeDescription: 'Range: 1980 to 2020',
            },
            categories: [1980, 1990, 2000, 2020],
        },

        //都道府県名とかのレイアウト系
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
        },

        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false,
                },
                pointStart: 1980,
            },
        },

        series:
            populationdata.populationdata.length === 0
                ? [{ name: '都道府県名', data: [] }]
                : series,
    }
    return (
        <>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
                oneToOne={true}
            />
        </>
    )
}

export default CompareChart

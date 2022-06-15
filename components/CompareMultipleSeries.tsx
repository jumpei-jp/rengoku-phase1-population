import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import HighchartsMore from 'highcharts/highcharts-more'
import React from 'react'

const CompareChart = () => {
    if (typeof Highcharts === 'object') {
        HighchartsMore(Highcharts)
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
            title: {
                text: '人口数',
            },
            scale: 10000,
            ceiling: 10000000, //最大値
            floor: 0, //最小値
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

        series: [
            {
                name: '東京',
                data: [11988120, 12088129, 12988129, 13988129],
            },
            {
                name: '大阪',
                data: [7988120, 8088129, 8288129, 8888129],
            },
            {
                name: '愛知',
                data: [6788120, 6888129, 6988129, 7588129],
            },
            {
                name: '福岡',
                data: [4888120, 4988129, 5088129, 5188129],
            },
            {
                name: '神奈川',
                data: [8888120, 8988129, 9000029, 9058129],
            },
        ],
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

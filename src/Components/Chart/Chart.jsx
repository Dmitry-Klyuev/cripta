import React from 'react';
import {Line} from "@ant-design/charts";
import {data} from "./Constants";

export const Chart = () => {

    const config = {
        data,
        xField: 'date',
        yField: 'value',
        yAxis: {
            label: {
                // 数值格式化为千分位
                formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
            },
        },
        seriesField: 'type',
        color: ({ type }) => {
            return type === 'Tether' ? '#F4664A' : type === 'Bitcoin' ? '#30BF78' : '#002cfd';
        },
        lineStyle: ({ type }) => {
            if (type === 'register') {
                return {
                    lineDash: [4, 4],
                    opacity: 1,
                };
            }

            return {
                opacity: 0.5,
            };
        },
    };

    return <Line {...config} height={400}/>;

};

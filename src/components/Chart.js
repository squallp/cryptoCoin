import React, {useEffect, useState} from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {AreaChart,Area} from "recharts";

function Chart(props) {
    return (
            <>
            <AreaChart width={props.width} height={props.height} data={props.data} margin={{top: 5,right: 5,left: 25,bottom: 5}}>
                <YAxis />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                <Legend />
                <Area type="monotone" dataKey="price" stroke="#1a47a2" fill={props.color} />
            </AreaChart> 
            </>
            );
        }

        export default Chart;

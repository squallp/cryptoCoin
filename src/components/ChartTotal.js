import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, Label, LabelList,Tooltip, ResponsiveContainer } from 'recharts';
import millify from "millify";

function ChartTotal(props) {
       const parsiranoData = [];

   props?.data.map((coin, index) => {
        parsiranoData.push({
            name: coin.name,
            marketCap: parseInt(coin.marketCap),
        });
   });

    return (
            <>
            <ResponsiveContainer width="100%" height={props.height}>
            <PieChart>
                <Pie data={parsiranoData} dataKey="marketCap" nameKey="name" startAngle={180} endAngle={0} cx="50%" cy="40%" innerRadius={60} fill="#fff" stroke="#021042"/>
                <Tooltip cursor={{ strokeWidth: 2 }} />
            </PieChart>
            </ResponsiveContainer>
            </>
            );
        }
        export default ChartTotal;

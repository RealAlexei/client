import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Stacked = () => {

    const data = [
        {
          name: 'янв',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'фев',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'мар',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'апр',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'май',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'июн',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'июл',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
    return (
      <div style={{ width: '100%', height: '400px' }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="0 10" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" stackId="a" fill="#8884d8" />
          <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
      </div>
    );

}

export default Stacked;
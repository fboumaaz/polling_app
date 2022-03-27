import React, { FC } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const BarChart: FC<any> = ({ chartData }: any) => (
  <div>
    <Bar
      data={chartData}
      options={{
        plugins: {
          legend: {
            display: true,
            position: 'bottom',
          },
        },
      }}
    />
  </div>
);

export default BarChart;

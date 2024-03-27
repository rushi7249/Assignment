import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import 'chartjs-adapter-moment'; 

const LineChart = ({ data }) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    if (data) {
      const chartData = {
        labels: data.map(item => item.date),
        datasets: [
          {
            label: 'Combined',
            data: data.map(item => item.cumsum),
            borderColor: 'rgba(75,192,192,1)',
            backgroundColor: 'rgba(75,192,192,0.4)',
            pointBackgroundColor: 'rgba(75,192,192,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(75,192,192,1)',
          }
        ],
      };
      setChartData(chartData);
    }
  }, [data]);

  return (
    <div>
      {chartData && (
        <Line
          data={chartData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            title: {
              display: true,
              text: 'Line Chart with Highlighted Periods',
            },
            scales: {
              x: {
                type: 'time',
                time: {
                  unit: 'day',
                  displayFormats: {
                    day: 'MMM DD',
                  },
                },
                ticks: {
                  autoSkip: true,
                  maxTicksLimit: 10,
                },
              },
            },
          }}
        />
      )}
    </div>
  );
};

export default LineChart;

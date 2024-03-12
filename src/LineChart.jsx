

import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const LineChart = ({ minutes }) => {

  
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = document.getElementById('cpu-usage-chart').getContext('2d');
    const labels = Array.from({ length: minutes }, (_, i) => {
      const currentTime = new Date(Date.now() - (minutes - i - 1) * 60 * 1000);
      return `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
    });

    if(!ctx) return;

    const newChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Used',
            data: Array.from({ length: minutes }, () => Math.floor(Math.random() * 100)),
            borderColor: 'red',
            borderWidth: 1,
            fill: false,
          },
          {
            label: 'Requested',
            data: Array.from({ length: minutes }, () => Math.floor(Math.random() * 100)),
            borderColor: 'blue',
            borderWidth: 1,
            fill: false,
          },
          {
            label: 'Limits',
            data: Array.from({ length: minutes }, () => Math.floor(Math.random() * 100)),
            borderColor: 'green',
            borderWidth: 1,
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            title: {
              display: true,
              text: ` ${minutes} Minutes`,
            },
          },
          y: {
            title: {
              display: true,
              text: 'Value',
            },
          },
        },
      },
    });

    chartRef.current = newChart;

    
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [minutes]);

  return (
    <div>
      <canvas id="cpu-usage-chart" />
    </div>
  );
};

export default LineChart;


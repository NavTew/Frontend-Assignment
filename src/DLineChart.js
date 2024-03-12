import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const DLineChart = ({ minutes }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = document.getElementById('disk-iops-chart').getContext('2d');
    const labels = Array.from({ length: minutes }, (_, i) => {
      const currentTime = new Date(Date.now() - (minutes - i - 1) * 60 * 1000);
      return `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
    });


    if (!ctx) return;

    const newChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Read',
            data: Array.from({ length: minutes }, () => Math.floor(Math.random() * 100)),
            borderColor: 'red',
            borderWidth: 1,
            fill: false,
          },
          {
            label: 'Write',
            data: Array.from({ length: minutes }, () => Math.floor(Math.random() * 100)),
            borderColor: 'blue',
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

    // Store the chart instance in the ref
    chartRef.current = newChart;

    // Cleanup function
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [minutes]);

  return (
    <div>
      <canvas id="disk-iops-chart" />
    </div>
  );
};

export default DLineChart;

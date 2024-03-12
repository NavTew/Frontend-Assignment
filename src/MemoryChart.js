import React, { useEffect, useState } from 'react';
import { MimicMetrics } from './api-mimic';
import MLineChart from './MLineChart';

const MemoryChart = ({ minutes }) => {
  const [memoryData, setMemoryData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const metrics = await MimicMetrics.fetchMetrics({ startTs: Date.now() - minutes * 60 * 1000, endTs: Date.now() });
      const memoryMetrics = metrics.find((metric) => metric.name === 'Memory Usage');
      if (memoryMetrics) {
        setMemoryData(memoryMetrics.graphLines.map((line) => ({
          used: line.values[0].value,
          requested: line.values[1].value,
          limits: line.values[2].value,
        })));
      }
    };
    fetchData();
  }, [minutes]);

  return <MLineChart data={memoryData} minutes={minutes} />;
};

export default MemoryChart;

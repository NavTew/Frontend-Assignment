import React, { useEffect, useState } from 'react';
import { MimicMetrics } from './api-mimic';
import NLineChart from './NLineChart';

const NetworkChart = ({ minutes }) => {
  const [NetworkData, setNetworkData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const metrics = await MimicMetrics.fetchMetrics({ startTs: Date.now() - minutes * 60 * 1000, endTs: Date.now() });
      const NetworkMetrics = metrics.find((metric) => metric.name === 'Network Usage');
      if (NetworkMetrics) {
        setNetworkData(NetworkMetrics.graphLines.map((line) => ({
          used: line.values[0].value,
          requested: line.values[1].value,
          limits: line.values[2].value,
        })));
      }
    };
    fetchData();
  }, [minutes]);

  return <NLineChart data={NetworkData} minutes={minutes} />;
};

export default NetworkChart;

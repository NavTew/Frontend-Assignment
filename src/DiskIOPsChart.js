import React, { useEffect, useState } from 'react';
import { MimicMetrics } from './api-mimic';
import DLineChart from './DLineChart';

const DiskIOPsChart = ({ minutes }) => {
  const [diskIOPsData, setDiskIOPsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const metrics = await MimicMetrics.fetchMetrics({ startTs: Date.now() - minutes * 60 * 1000, endTs: Date.now() });
      const diskIOPsMetrics = metrics.find((metric) => metric.name === 'Disk IOPs');
      if (diskIOPsMetrics) {
        setDiskIOPsData(diskIOPsMetrics.graphLines.map((line) => ({
          read: line.values[0].value,
          write: line.values[1].value,
        })));
      }
    };
    fetchData();
  }, [minutes]);

  return <DLineChart data={diskIOPsData} minutes={minutes} />;
};

export default DiskIOPsChart;

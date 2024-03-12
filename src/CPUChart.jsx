// import React, { useEffect, useState } from 'react';
// import { MimicMetrics } from './api-mimic';
// import MLineChart from './MLineChart';

// const CPUChart = ({ minutes }) => {
//   const [cpuData, setCPUData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const metrics = await MimicMetrics.fetchMetrics({ startTs: Date.now() - minutes * 60 * 1000, endTs: Date.now() });
//       const cpuMetrics = metrics.find((metric) => metric.name === 'CPU Usage');
//       if (cpuMetrics) {
//         setCPUData(cpuMetrics.graphLines.map((line) => ({
//           used: line.values[0].value,
//           requested: line.values[1].value,
//           limits: line.values[2].value,
//         })));
//       }
//     };
//     fetchData();
//   }, [minutes]);

//   return <MLineChart data={cpuData} minutes={minutes} />
// };

// export default CPUChart;

import React, { useEffect, useState } from 'react';
import { MimicMetrics } from './api-mimic';
import LineChart from './LineChart';

const CPUChart = ({ minutes }) => {
  const [cpuData, setCPUData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const metrics = await MimicMetrics.fetchMetrics({ startTs: Date.now() - minutes * 60 * 1000, endTs: Date.now() });
      const cpuMetrics = metrics.find((metric) => metric.name === 'CPU Usage');
      if (cpuMetrics) {
        setCPUData(cpuMetrics.graphLines.map((line) => ({
          used: line.values[0].value,
          requested: line.values[1].value,
          limits: line.values[2].value,
        })));
      }
    };
    fetchData();
  }, [minutes]);

  return <LineChart data={cpuData} minutes={minutes} />;
};

export default CPUChart;

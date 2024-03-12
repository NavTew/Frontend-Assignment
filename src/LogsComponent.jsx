// import React, { useEffect, useState } from 'react';
// import { MimicLogs } from './api-mimic';

// const LogsComponent = (props) => {
//   const [logs, setLogs] = useState([]);
//   let specTime= props.time * 60000;
  
//   useEffect(() => {
//     const fetchLogs = async () => {
//       // Fetch logs using the MimicLogs API
//       const endTs = Date.now();
//       const startTs = endTs - specTime; // 10 minutes in milliseconds
//       const limit = 100; // Limit the number of logs fetched

//       const logTime = new Date(currentTime.getTime() -  (specTime * 1000));

//       const fetchedLogs = await MimicLogs.fetchPreviousLogs({ startTs, endTs, limit });

//       // Filter logs based on the "showLogsForPast10Minutes" prop
//       const filteredLogs = fetchedLogs.filter(log => {
//         return log.timestamp >= startTs && log.timestamp <= endTs;
//       });

//       setLogs(filteredLogs);
//     };

//     fetchLogs();
//   }, [specTime]);


//   return (
//     <div>
//       <h2>Live Logs for the Past {props.time} minutes:</h2>
//       <ul>
//         {logs.map(log => (
//           <li key={log.timestamp}>{new Date(log.timestamp).toLocaleString()}: {log.message}</li>
//         ))}
//       </ul>
//     </div>
//   );

// };

// export default LogsComponent;


import React, { useEffect, useState } from 'react';
import { MimicLogs } from './api-mimic';
import BasicExample from './Spinner';
import "./styles.css";

const LogsComponent = (props) => {
  const [logs, setLogs] = useState([]);
  const specTime = props.time * 60000;

  useEffect(() => {
    const fetchLogs = async () => {
      const endTs = Date.now();
      const startTs = endTs - specTime;
      const limit = 100;

      const fetchedLogs = await MimicLogs.fetchPreviousLogs({ startTs, endTs, limit });

      const filteredLogs = fetchedLogs.filter(log => {
        return log.timestamp >= startTs && log.timestamp <= endTs;
      }).map(log => ({
        timestamp: new Date(log.timestamp).toLocaleString('default', { month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }),
        message: log.message
      }));

      setLogs(filteredLogs);
    };

    fetchLogs();
  }, [specTime]);

  return (
    <div>
      
      <p className="logtime">Showing logs for {new Date(Date.now() - specTime).toLocaleString()} {`->`} {new Date().toLocaleString()}</p>
      <span className="spinner"><BasicExample/><p>Loading previous logs</p></span>
      <ul className="generated-logs">
        {logs.map(log => (
          <li key={log.timestamp}>
            <span className="date-text">
            {log.timestamp}: 
            </span>
             {log.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default LogsComponent;


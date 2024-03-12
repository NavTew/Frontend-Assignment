
import { useState } from "react";
import LogsComponent from "./LogsComponent";
import 'bootstrap/dist/css/bootstrap.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import "./styles.css"

export default function MyDropDown(props)
{
    const [timee, setTimee] = useState(5);
    

    return (
        <>
        <ul className="drop-down">
            

            {/* <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
            Show Logs For
            </Dropdown.Toggle> */}
            <div className="check">
            <DropdownButton className="dropdown" key="secondary" variant="secondary" title="Show previous">
            <Dropdown.Item href="#/last5minutes" onClick={()=>setTimee(5)}>Last 5 minutes</Dropdown.Item>
            <Dropdown.Item href="#/last15minutes" onClick={()=>setTimee(15)}>Last 15 minutes</Dropdown.Item>
            <Dropdown.Item href="#/last30minutes" onClick={()=>setTimee(30)}>Last 30 minutes</Dropdown.Item>
            <Dropdown.Item href="#/last1hour" onClick={()=>setTimee(60)}>Last 1 hour</Dropdown.Item>
            <Dropdown.Item href="#/last3hours" onClick={()=>setTimee(180)}>Last 3 hour</Dropdown.Item>
            <Dropdown.Item href="#/last6hours" onClick={()=>setTimee(360)}>Last 6 hour</Dropdown.Item>
        </DropdownButton>
        </div>

        </ul>

        <LogsComponent time={timee}/>

            {/* <button onClick={()=>setTimee(5)}>Last 5 minutes</button>
            <button onClick={()=>setTimee(15)}>Last 15 minutes</button>
            <button onClick={()=>setTimee(30)}>Last 30 minutes</button>
            <button onClick={()=>setTimee(60)}>Last 1 hour</button>
            <button onClick={()=>setTimee(180)}>Last 3 hours</button>
            <button onClick={()=>setTimee(360)}>Last 6 hours</button> */}

           </> 
            
        
    );
}







{/* function BasicExample() {
  return (
    
  );
}

export default BasicExample;

// function Dropdownitem()
// { */}
//     const [timee, setTimee] = useState("Select");

//     const array = [
//         {id: 1, name: "Last 5 minutes"}, 
//         {id: 2, name: "Last 15 minutes"}, 
//         {id: 3, name: "Last 30 minutes"}, 
//         {id: 4, name: "Last 1 hour"}, 
//         {id: 5, name: "Last 3 hours"}, 
//         {id: 6, name: "Last 6 hours"}
//     ];

//     // const arrayItems = array.map(dditem => <li key={dditem.id}><button onClick={()=>setTimee(dditem.id)}>{dditem.name}</button></li>)
//     // return(
//     //     <><ul>{arrayItems}</ul></>
//     // );

//     return(
//         <ul>
//             <li>
                
//             </li>

//         </ul>
//     )
    

// }


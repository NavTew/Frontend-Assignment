import Navbar from "./Navbar"
import { Route, Routes } from "react-router-dom"
import Logs from "./Logs.js"
import Metrics from "./Metrics"


export default function App ()
{
    return <>
    
    <Navbar/>
    <div className="container">
        <Routes>
            
            <Route path="/logs" element={<Logs/>} />
            
            <Route path="/metrics" element={<Metrics/>}/>
        </Routes>
    </div>

    </>
}
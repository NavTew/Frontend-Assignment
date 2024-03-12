import { Link, useMatch, useResolvedPath } from "react-router-dom"

import MetricsPage from "./MetricsPage";
import LogsPage from "./LogsPage"

import './styles.css';



export default function Navbar()
{
    return (
    
    <div className="nbar">
    <nav className="nav">
        <Link to="/" className="site-title">
        <img className="logo" alt="logo" src={require('.//assets/myTrueFoundryLogo.png')} />
            
        
            <CustomLink to="/metrics">
                <MetricsPage/>
            </CustomLink>
            
            <CustomLink to="/logs">
                <LogsPage/>
            </CustomLink>
            
        
            
        </Link>

        
    </nav>
    </div>)
}

function CustomLink({to, children, ...props})
{

    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path:resolvedPath.pathname, end: true});
    
    return(
        <navbartag className={isActive === to ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </navbartag>
    )
}
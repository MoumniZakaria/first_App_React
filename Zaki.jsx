import React from 'react';
import {useState} from 'react';
import { BrowserRouter as  Router, Routes ,Route ,Link, } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './S.css';

import logo from './navside/logo.png'
import sm1 from './navside/sm1.png'
import line from './navside/Line.png'
const Sidebar =({children})=>{
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const stylo ={
        width :'100px',
        height:'100px',
    };
    const MenuItems = [
        {
            path:"/",
            name:"Dashboard",
            icon:<img  style={stylo} src={sm1}/>
        },
        {
            path:"/",
            name:"Events",
            icon:<img  style={stylo} src={sm1}/>
        },
        {
            path:"/",
            name:"Doors",
            icon:<img  style={stylo} src={sm1}/>
        },
        {
            path:"/",
            name:"Access Levels",
            icon:<img  style={stylo} src={sm1}/>
        },
        {
            path:"/",
            name:"Automation",
            icon:<img  style={stylo} src={sm1}/>
        },
        {
            path:"/",
            name:"Time Settings",
            icon:<img  style={stylo} src={sm1}/>
        },
        {
            path:"/",
            name:"Maps",
            icon:<img  style={stylo} src={sm1}/>
        },
        {
            path:"/",
            name:"Reports",
            icon:<img  style={stylo} src={sm1}/>
        },
        {
            path:"/",
            name:"Users",
            icon:<img  style={stylo} src={sm1}/>
        },
        {
            path:"/",
            name:"Groups",
            icon:<img  style={stylo} src={sm1}/>
        },
        {
            path:"/",
            name:"Settings",
            icon:<img  style={stylo} src={sm1}/>
        },
    ]
    return(
        <>
        <Router>
            <div className="col-2">
            
                <div className="sidebar mr-auto">
                        <img src={logo} className='logo' alt="prblm" />
                        <ul className="navbar-nav ">
                           
                            <li className='Nav-item'><Link as={Link} to={"/Dashboard"}><img  className=' sm sm1 Nav-link ' src={sm1}  alt="prblm" /><label htmlFor="">Dashboard</label></Link></li>
                            <li className='Nav-item'><Link as={Link} to={"/Events"}><img  className=' sm sm2 Nav-link ' src={sm1}  alt="prblm" /><label htmlFor="">Events</label></Link></li>
                            <li className='Nav-item'><Link as={Link} to={"/Doors"}><img  className=' sm sm3 Nav-link ' src={sm1}  alt="prblm" /><label htmlFor="">Doors</label></Link></li>
                            <li className='Nav-item'><Link as={Link} to={"/Access_Levels"}><img  className=' sm sm4 Nav-link ' src={sm1}  alt="prblm" /><label htmlFor="">Access Levels</label></Link></li>
                            <li className='Nav-item'><Link as={Link} to={"/Automation"}><img  className=' sm sm5 Nav-link ' src={sm1}  alt="prblm" /><label htmlFor="">Automation</label></Link></li>
                            <li className='Nav-item'><Link as={Link} to={"/Time_Settings"}><img  className=' sm sm6 Nav-link ' src={sm1}  alt="prblm" /><label htmlFor="">Time Settings </label></Link></li>
                            <li className='Nav-item'><Link as={Link} to={"/Maps"}><img  className=' sm sm7 Nav-link '   src={sm1}  alt="prblm" /><label htmlFor="">Maps</label></Link></li>
                            <li className='Nav-item'><Link as={Link} to={"/Reports"}><img  className=' sm sm8 Nav-link ' src={sm1}  alt="prblm" /><label htmlFor="">Reports</label></Link></li><br />
                            <img  className='line' src={line} />
                            <li className='Nav-item'><Link as={Link} to="/Users"><img  className=' sm sm9 Nav-link ' src={sm1}  alt="prblm" /><label htmlFor="">Users</label></Link></li>
                            <li className='Nav-item'><Link as={Link} to="/Groups"><img  className=' sm sm10 Nav-link '  src={sm1}  alt="prblm" /><label htmlFor="">Groups</label></Link></li><br />
                            <img  className='line' src={line} />
                            <li className='Nav-item'><Link as={Link} to="/Settings"><img  className=' sm sm11 Nav-link ' src={sm1}  alt="prblm" /><label htmlFor="">Settings</label></Link></li>

                        </ul>
                </div>
                        
            </div>    
            </Router>
            
            
        </>
    )
}
export default Sidebar  ;
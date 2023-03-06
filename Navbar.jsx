import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Doors from './Doors'
import m0 from './mainnav/body.jpg';
import m1 from './mainnav/m1.png';
import m2 from './mainnav/m2.png';
import m3 from './mainnav/m3.png';
import m4 from './mainnav/m4.png';
import m5 from './mainnav/m5.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar1 from './SideBar1';
import toggle from './SideBar1';
import './App1.css';
function Menu() {
  const test =()=>{
    alert('dont give up')
    
  }
  const[isOpen ,setIsOpen] = useState(false);
    return ( 
      <div className="main ">
      <Router>
        
      <nav className="navbar navbar-light bg-light flex" style={{width: isOpen ? "10%" : "100%"}}>
        <div className="btn">
        <button className='b1'><img  className='m1' src={m1} alt="prblm" onClick={test}  /></button>
        </div>
        <div className="items flex">
          <ul className="navbar-nav mr-auto flex-row " >
            <li><NavLink as={Link} to="/"><img  className='m2' src={m2}  alt="prblm" /></NavLink></li>
            <li><NavLink as={Link} to="/"><img  className='m3' src={m3}  alt="prblm" /></NavLink></li>
            <li><NavLink as={Link} to="/"><img  className='m4' src={m4}  alt="prblm" /></NavLink></li>
            <li><NavLink as={Link} to="/"><img  className='m5' src={m5}  alt="prblm" /></NavLink></li>
          </ul>
      </div>
      <div className='usrer'>
      <img src={m0} alt="prblm" className='m0'/>
      <select className=" mini" >
        <option value="1">ZAKARIA MOUMNI</option>
        <option value="2">OUSSAMA JAMIL</option>

      </select>
      </div>
      
      </nav>
    
        <Routes>
            <Route path='/Doors' element={<Doors/>} />
            

        </Routes>
    
    </Router>
    </div>

    );
}
export default Menu;
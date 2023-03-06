import {react}from 'react';
import './App.css';
import {Router , Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './Navbar';
import SideBar1 from './SideBar1'
//--------------------
import Dashbord from './pages/Dashboard'
import Automation from './pages/Automation'
import Access_Levels from './pages/Access_Levels'
import Doors from './pages/Doors'
import Events from './pages/Events'
import Groups from './pages/Groups'
import Maps from './pages/Maps'
import Reports from './pages/Reports'
import Settings from './pages/Settings'
import Time_Settings from './pages/Time_Settings'
//--------------------




function App(){
    
    return(
    <div className="row main" >
      <span className="col-1 sider">
         
         <SideBar1/>
      </span>
      {/* ---------------------------------- */}
      <span className='offset-1 col-11 mo ' >
            <div className="row nav">
               <Navbar/>
               
            </div> 
            <div className='row contents'>
               <h1>i am here</h1>
               {/* <Router>
                  <Dashbord/>
                  <Automation/>
                  <Access_Levels/>
                  <Doors/>
                  <Events/>
                  <Groups/>
                  <Maps/>
                  <Reports/>
                  <Settings/>
                  <Time_Settings/>
               </Router> */}

            </div>
      </span>
    </div>
   )
}
export default App  ;
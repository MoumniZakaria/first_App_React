import {react}from 'react';
import {useState}from 'react';
import { BrowserRouter as  Router, Routes ,Route ,Link,NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
//----------components--------------
// import Dashbord from './pages/Dashboard'
// import Automation from './pages/Automation'
// import Access_Levels from './pages/Access_Levels'
// import Doors from './pages/Doors'
// import Events from './pages/Events'
// import Groups from './pages/Groups'
// import Maps from './pages/Maps'
// import Reports from './pages/Reports'
// import Settings from './pages/Settings'
// import Time_Settings from './pages/Time_Settings'
// --------------Photo------------
import sm1 from './navside/sm1.png'
import logo1 from './navside/logo1.png'
import logo2 from './navside/logo2.png'
import './App2.css'

const LogoStyle ={
    width : '100px',
    border: '1px solid black' 
    
}
const stylo ={
    width :'20px',
    height:'20px',
    
}
const MenuItems=[
    {
        path:"/Dashboard",
        //element:<Dashboard/>,
        name:"Dashboard",
        icon:<img  style={stylo} src={sm1}/>
    },
    {
        path:"/Events",
        //element:<Events/>,
        name:"Events",
        icon:<img  style={stylo} src={sm1}/>
    },
    {
        path:"/Doors",
        //element:<Doors/>,
        name:"Doors",
        icon:<img  style={stylo} src={sm1}/>
    },
    {
        path:"/Access_Levels",
        //element:<Access_Levels/>,
        name:"Access Levels",
        icon:<img  style={stylo} src={sm1}/>
    },
    {
        path:"/Automation",
        //element:<Automation/>,
        name:"Automation",
        icon:<img  style={stylo} src={sm1}/>
    },
    {
        path:"/Time_Settings",
        //element:<Time_Settings/>,
        name:"Time Settings",
        icon:<img  style={stylo} src={sm1}/>
    },
    {
        path:"/Maps",
        //element:<Maps/>,
        name:"Maps",
        icon:<img  style={stylo} src={sm1}/>
    },
    {
        path:"/Reports",
        //element:<Reports/>,
        name:"Reports",
        icon:<img  style={stylo} src={sm1}/>
    },
    {
        path:"/Users",
        //element:<Users/>,
        name:"Users ",
        icon:<img  style={stylo} src={sm1}/>
    },
    {
        path:"/Groups",
        //element:<Groups/>,
        name:"Groups ",
        icon:<img  style={stylo} src={sm1}/>
    },
    {
        path:"/Settings",
        //element:<Settings/>,
        name:"Settings ",
        icon:<img  style={stylo} src={sm1}/>
    }

]
 
const Sidebar =()=>{
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
   
    
    
    return(
        <div className='col main1 ' style={{width: isOpen ? "200px" : "100px"}}>
            <span className='Logo'>
                <div className='logo1'>
                    <img src={logo1} style={LogoStyle} className='logo' alt="" onClick={toggle}/>
                </div>
                <div className='logo2'>
                    <img src={logo2} alt="" style={{display: isOpen ? " " : "none"}} />  
                </div>
            </span>
            <span className='Icon'>  
               <Router>
                { MenuItems.map((item,index) =>
                                    <NavLink to={item.path} key={index} element={item.element} className="link">
                                        <div  className="icon">{item.icon}</div>
                                        <div  style={{display: !isOpen && "none"}}  className="link_text">{item.name}</div> 
                                    </NavLink>
                         )}
                </Router>

            </span>

        </div>
    )
}
export default Sidebar  ;
// import {react}from 'react';
// import {useState}from 'react';
// import { BrowserRouter as  Router, Routes ,Route ,Link,NavLink } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css'
// import './App.css';
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




// import logo1 from './navside/logo1.png'
// import logo2 from './navside/logo2.png'
// import sm1 from './navside/sm1.png'
// import line from './navside/Line.png'
// const stylo ={
//     width :'40px',
//     height:'40px',
    
// }
// const LogoStyle ={
//     width :'40px',
//     height:'40px',
// }
// const MenuItems=[
//     {
//         path:"/Dashboard",
//         //element:<Dashboard/>,
//         name:"Dashboard",
//         icon:<img  style={stylo} src={sm1}/>
//     },
//     {
//         path:"/Events",
//         //element:<Events/>,
//         name:"Events",
//         icon:<img  style={stylo} src={sm1}/>
//     },
//     {
//         path:"/Doors",
//         //element:<Doors/>,
//         name:"Doors",
//         icon:<img  style={stylo} src={sm1}/>
//     },
//     {
//         path:"/Access_Levels",
//         //element:<Access_Levels/>,
//         name:"Access Levels",
//         icon:<img  style={stylo} src={sm1}/>
//     },
//     {
//         path:"/Automation",
//         //element:<Automation/>,
//         name:"Automation",
//         icon:<img  style={stylo} src={sm1}/>
//     },
//     {
//         path:"/Time_Settings",
//         //element:<Time_Settings/>,
//         name:"Time Settings",
//         icon:<img  style={stylo} src={sm1}/>
//     },
//     {
//         path:"/Maps",
//         //element:<Maps/>,
//         name:"Maps",
//         icon:<img  style={stylo} src={sm1}/>
//     },
//     {
//         path:"/Reports",
//         //element:<Reports/>,
//         name:"Reports",
//         icon:<img  style={stylo} src={sm1}/>
//     },
//     {
//         path:"/Users",
//         //element:<Users/>,
//         name:"Users ",
//         icon:<img  style={stylo} src={sm1}/>
//     },
//     {
//         path:"/Groups",
//         //element:<Groups/>,
//         name:"Groups ",
//         icon:<img  style={stylo} src={sm1}/>
//     },
//     {
//         path:"/Settings",
//         //element:<Dashboard/>,
//         name:"Settings ",
//         icon:<img  style={stylo} src={sm1}/>
//     }

// ]
 
// const Sidebar =({children})=>{
//     const[isOpen ,setIsOpen] = useState(false);
//     const toggle = () => setIsOpen (!isOpen);
   
    
    
//     return(
//         <>
//         <Router>
//             <div className="col-2 side" style={{width: isOpen ? "100%" : "50px"}}>
            
               
//                         <img src={logo1} style={LogoStyle} onClick={toggle} className='logo' alt="prblm" />
//                         <ul className="navbar-nav ">
//                          <li> 
                           
//                          {/* { MenuItems.map((item,index) =>
//                                     <NavLink to={item.path} key={index} className="link">
//                                         <div  className="icon">{item.icon}</div>
//                                         <div  style={{display: !isOpen && "none"}}  className="link_text">{item.name}</div>
                                        
//                                     </NavLink>
//                          )} */}
                            
//                         </li> 

//                         </ul>
            
                        
//             </div>    
//             </Router>
            
            
//         </>
//     )
// }
// export default Sidebar  ;
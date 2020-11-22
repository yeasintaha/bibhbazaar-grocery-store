import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import HomeIcon from '@material-ui/icons/Home';
import LiveHelpOutlinedIcon from '@material-ui/icons/LiveHelpOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import ExpandLessOutlinedIcon from '@material-ui/icons/ExpandLessOutlined';
import "./Sidebar.css"


function Sidebar() {

    const Menubar_items = [
        {
            title:"Home",
            path:"/home",
            icon:<HomeIcon/>,
            class:"nav__elements",
        },
        {
            title:"Complain",
            path:"/complain",
            icon:<LiveHelpOutlinedIcon/>,
            class:"nav__elements",
        },
        {
            title:"Signin",
            path:"/signin",
            icon:<ExpandLessOutlinedIcon/>,
            class:"nav__elements",
        },
        {
            title:"Main Page",
            path:"/",
            icon:<MenuIcon/>,
            class:"nav__elements",
        },
        {
            title:"Add to busket",
            path:"/checkout",
            icon:<CloseIcon/>,
            class:"nav__elements",
        },


    ]

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = ()=> setSidebar(!sidebar);
 
    return (
        <div>
            <div className="navbar">
                <Link to="#" className="menu__bars">
                    <MenuIcon onClick={showSidebar}/>
                </Link>
            </div>
            <div className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className="navmenu__items" onClick={showSidebar}>
                    <li className="navbar__toggle">
                        <Link to="#" className="menu__bars">
                            <CloseIcon/>
                        </Link>
                    </li>
                    {
                        Menubar_items.map((item,index)=>{
                            return(
                                <li key={index} className={item.class}>
                                    <Link to={item.path} style={{textDecoration:'none'}}>
                                        {item.icon}
                                        <span className="title__span">{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })
                    }
                </ul>
                 
            </div>
        </div>
    )
}

export default Sidebar

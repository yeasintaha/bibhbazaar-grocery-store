import React,{useState,useEffect} from 'react'
import {useStateValue} from "./StateProvider"
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {NavLink as Link} from 'react-router-dom';
import ForumIcon from '@material-ui/icons/Forum';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import styled from "styled-components";
import {auth } from "./firebase"

function Header({searchTerm,handleChange}) {

  
    const NavMenu = styled.div`
      display:flex;
      align-items:center;

      @media screen and (max-width:768px){
        display:flex;
      }
    `


    const [visibleHeadermenu, setVisibleHeadermenu] = useState(false);
     useEffect( () => {
      window.addEventListener("resize",()=>{
            if(window.innerWidth < 1000){
                setVisibleHeadermenu(true);
            } 
            else{
                setVisibleHeadermenu(false);
            }
        })
    }, [])

    const [{ cart, user }, dispatch] = useStateValue();

    const handleAuthenticaton = () => {
      if (user) {
        auth.signOut();
      }
    };
    
    return (
    <div className='header' id="header__id">
      <Link to='/home' style={{textDecoration:"none", color:"whitesmoke"}}>
        <img
          className='header__logo'
          src='logo_banner\LOGO.png'
          alt="BibhBazaar"
        />
      </Link>

      <div className='header__search'>
        <input className='header__searchInput' type='text'
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
         />
        <SearchIcon className='header__searchIcon' />
      </div>
      
      <NavMenu>
          <div className='header__nav'>
            <Link to="/complain" style={{textDecoration:"none"}} activeStyle>
              <div className="header__icon">
                <ForumIcon/>
                <p className="line">Complain</p>
              </div>
            </Link>
            <Link to={!user && "/signin"} style={{textDecoration:"none"}}  activeStyle>
              <div className='header__icon' onClick = {handleAuthenticaton}>
                  <PersonOutlineIcon />
                  <p className="line">
                    {user ? "Sign Out" : "Sign In"}
                  </p>
              </div>
            </Link>

            <Link to='/checkout' style={{textDecoration:"none"}} activeStyle>
            <div className='header__icon' style={{marginRight:"50px"}}>
               <div style={{display:"flex"}}>
               <ShoppingBasketIcon style={{display:"flex",marginRight:"10px"}}/> <p style={{color:"white",alignSelf:"center"}}>{cart.length}</p>  
               </div>
              <p className="line">Add to cart</p>                    
            </div>
          </Link>
        </div>
      </NavMenu>
    </div>
    
    
  );
}

export default Header;

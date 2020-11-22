import React from 'react';
import {Link} from "react-router-dom"
import StayCurrentPortraitIcon from '@material-ui/icons/StayCurrentPortrait';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import "./Footer.css"

function Footer() {
    return (
        <div className="footer">  
            <div className="main__site__detail">
                <Link to="/home"style={{textDecoration:'none' , color:'white'}}> <img src="logo_banner/LOGO.png" alt="" style={{width:"150px"}}/> </Link>
                <Link to="/" style={{textDecoration:'none' , color:'white'}}><p>Home</p></Link>
                <Link to="/" style={{textDecoration:'none' , color:'white'}}><p>About Us</p></Link>                      
                <Link to="/" style={{textDecoration:'none' , color:'white'}}><p>Our Services</p></Link>                      
            </div>                   
            <div className="contact__us">
                <h2>Contact Us</h2>
                <div className="mobile__number"><StayCurrentPortraitIcon/><p color="white">  +880 155991122</p> </div>
                <div className="email"><EmailIcon/>  <p> bibhbazaar@gmail.com</p> </div>
                <div className="facebook"><FacebookIcon/> <p> BibhBazaar</p></div>                       
            </div>  
            
        </div> 
    )
}

export default Footer;

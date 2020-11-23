import React ,{useState,useEffect} from 'react'
import "./MainPage_body.css";
import {useStateValue} from "./StateProvider"
import MainPage_header from "./MainPage_header";
import {Link, useHistory} from "react-router-dom"
import {Link as LinkS} from 'react-scroll';
import styled from "styled-components"
import Footer from "./Footer"
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import HomeIcon from '@material-ui/icons/Home';
import LiveHelpOutlinedIcon from '@material-ui/icons/LiveHelpOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import ExpandLessOutlinedIcon from '@material-ui/icons/ExpandLessOutlined';
import {BiUpArrowCircle} from "react-icons/bi"
import Zoom from 'react-reveal/Zoom';
import Rotate from 'react-reveal/Rotate';
import Slide from 'react-reveal/Slide';
import Flash from "react-reveal/Flash"
import Shake from 'react-reveal/Shake';
import Pulse from 'react-reveal/Pulse';
import { auth } from './firebase';

function MainPage_body() {

    const [{ cart, user }] = useStateValue();

    const [showup, setShowup] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 500){
                setShowup(true);
            }
            else{
                setShowup(false);
            }
        })
    }, [])

    const ShowUp = styled.div`
        position:fixed;
        bottom:90px;
        right:40px;
        color:#4caf50;
        font-size:40px;
    `
    const history = useHistory();
    const handleChange = ()=>{
        if(user){
            auth.signOut();
            history.push("/");
        }
        else{
            history.push("/signin");
        }
    }

       
    return (
        <div className="main__page" id="main__page__id">
            <div className="full__header">
                <div className="main_header">
                    <Link to='/home'>
                        <img
                        className='main_logo'
                        src='logo_banner\LOGO.png'
                        alt="LOGO"
                        />
                    </Link>
                    <div className='main__list' >
                        <ul>
                            <li>
                                <LinkS to="main__page__id" style={{textDecoration:'none', color:'whitesmoke'}} smooth={true} duration={2000} activeClassName="active_id"> <p className="header_id"> Home </p>  </LinkS>
                            </li>
                            <li>
                                <LinkS to="aboutid"  style={{textDecoration:'none',color:'whitesmoke'}} smooth={true} duration={2000} activeClassName="active_id"><p className="header_id"> About </p> </LinkS>
                            </li>
                            <li>
                                <LinkS to="servicesid"  style={{textDecoration:'none',color:'whitesmoke'}} smooth={true} duration={2000} activeClassName="active_id"> <p className="header_id"> Services </p> </LinkS> 
                            </li>
                        </ul>
                    </div>
                    <div className='main__nav'>            
                            <div className='main__option' onClick={handleChange} style={{cursor:"pointer"}}>
                               {
                                    user ?  "Sign Out" : "Sign In"
                               } 
                            </div>
                    </div>
                </div>
                
                <div className="home" id="homeid">
                    <div className="home__leftside">
                        <img src="Icons/Main_photo.svg" alt="" />
                    </div>
                    <div className="home__rightside">
                        <Pulse><h1>Welcome to BibhBazaar</h1></Pulse>
                        <p>We sell more than 120+ products.</p>
                        <Shake>
                         <Link to="./home" style={{textDecoration:'none'}}><button className="btn btn__mainpage">Shop Now !!!</button> </Link> 
                        </Shake>
                    </div>
                </div>

            </div>
            <LinkS to="main__page__id" style={{textDecoration:'none', color:'black'}} smooth={true} duration={1300} >
                <ShowUp>
                {
                    showup ? <BiUpArrowCircle/> : null
                }
                </ShowUp>
            </LinkS>
            <br/><br/>
            <div>
                <div className="body__container">  
                    <div className="about" id="aboutid">
                        <Zoom>
                            <h3 >
                                Why People Choose Us
                            </h3>
                        </Zoom>
                        <div className="about_info">
                            <Zoom>
                            <div className="fast__delievery">
                                <div className="hover__effect">
                                <img src="logo_banner/fast_delievery.png" alt=""/>
                                </div>
                                <p>Fast and free delivery</p>
                            </div>
                            </Zoom>
                            <Slide right>
                            <div className="convenient">
                                <div className="hover__effect">
                                <img src="logo_banner/services.png" alt=""/>
                                </div>
                                <p>Convenient & Quick</p>
                            </div>
                            </Slide>
                            <Slide left>
                            <div className="fresh">
                                <div className="hover__effect">
                                <img src="logo_banner/fresh_vegetables.png" alt=""/>
                                </div>
                                <p>Freshly Picked</p>
                            </div>
                            </Slide>
                        </div>
                        <br/> <br/>
                    </div>
                        <div className="service_content">
                            <h3>Our Services</h3>
                            <div className="services__info">
                                <div className="services" id="servicesid">
                                    <img src="logo_banner/services1.png" alt="" />
                                    <Flash>
                                    <p>
                                    BibhBazaar  is an online shop in Dhaka, Bangladesh. 
                                    We believe time is valuable to our fellow Dhaka residents, 
                                    and that they should not have to waste hours in traffic, 
                                    bad weather and wait in line just to buy daily basic necessities.
                                    This is why BibhBazaar delivers everything you need right at your door-step and 
                                    at no additional cost.
                                    </p>
                                    </Flash>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            <br/><br/><br/><br/>
            <Footer/>
        </div>
    )
}

export default MainPage_body;


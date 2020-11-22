import React,{useState,useEffect} from 'react'
import {NavLink as Link} from "react-router-dom"
import { FaFish,FaCarrot } from 'react-icons/fa';
import {BiDrink} from "react-icons/bi"
import {GiChicken,GiBeerBottle,GiMilkCarton,GiPieSlice, GiConcreteBag,GiWallet, GiBowTieRibbon,GiHamburgerMenu} from "react-icons/gi"
import {RiArrowUpSLine,RiArrowDownSLine} from "react-icons/ri"
import {IoIosArrowForward,IoIosArrowDropupCircle,IoIosArrowDropdownCircle} from "react-icons/io"
import {BiCake} from 'react-icons/bi'
import {MdLocalMall} from "react-icons/md"
import "./Sidebar_elements.css"
import styled from "styled-components"


function Sidebar_elements() {
    const [showcategory, setShowcategory] = useState(true);
    const [windowwidth, setWindowwidth] = useState(true);
    useEffect( () => {
      window.addEventListener("resize",()=>{
            if(window.innerWidth > 1000){
                setWindowwidth(true);
            }
            else{
                setWindowwidth(false);
            }
        })

    }, [])
    const Arrow_margin_left = styled.div`
      display:flex;
      margin-left:auto;
      font-size:20px;
      font-weight:900;
    `

    return (
        <div className="home__left">
            <ul className="item__category">
              <li onMouseEnter={()=> setShowcategory(!showcategory)} onClick={()=> setShowcategory(!showcategory)} style={{cursor:"pointer"}}>
                <h2 style={{display:'flex',alignItems:"center"}}>
                  <GiHamburgerMenu style={{display:'flex', marginRight:"3px", alignSelf:"center"}}/>
                  {
                    windowwidth ?  "Cetegory": null 
                  }
                  
                  <Arrow_margin_left>
                  {
                    showcategory ?  <IoIosArrowDropdownCircle style={{fontSize:"25px",alignSelf:"center"}}/> : <IoIosArrowDropupCircle style={{fontSize:"25px",alignSelf:"center"}}/>
                  }
                  </Arrow_margin_left>

                </h2>
              </li>
              {
                showcategory ? 

                <div>
                <Link to="/all_products" style={{textDecoration:'none'}} activeClassName="active_product">
                <li className="menu__items">
                    <div className="icon_description">
                      <MdLocalMall style={{alignSelf:'center'}}/>
                      <p>All Products</p>
                      <IoIosArrowForward style={{marginLeft:'auto', alignSelf:"center"}}/> 
                    </div>
                  </li>
                </Link>
                <Link to="/discount_products" style={{textDecoration:'none'}} activeClassName="active_product">
                <li className="menu__items">
                    <div className="icon_description">
                      <GiWallet style={{alignSelf:'center'}}/>
                      <p>Discount Products</p>
                      <IoIosArrowForward style={{marginLeft:'auto', alignSelf:"center"}}/> 
                    </div>
                  </li>
                </Link>
                <Link to="/bakery_and_snacks" style={{textDecoration:'none'}} activeClassName="active_product">
                <li className="menu__items">
                    <div className="icon_description">
                      <GiPieSlice style={{alignSelf:'center'}}/>
                      <p>Bakery and Snacks</p>
                      <IoIosArrowForward style={{marginLeft:'auto',alignSelf:"center"}}/> 
                    </div>
                  </li>
                </Link>
                <Link to="/dairy" style={{textDecoration:'none'}} activeClassName="active_product">
                  <li className="menu__items">
                    <div className="icon_description">
                      <GiMilkCarton style={{alignSelf:'center'}}/>
                      <p>Dairy</p>
                      <IoIosArrowForward style={{marginLeft:'auto',alignSelf:"center"}}/> 
                    </div>
                  </li>
                </Link>
                <Link to="/fish" style={{textDecoration:'none'}} activeClassName="active_product">
                  <li className="menu__items">
                    <div className="icon_description">
                      <FaFish style={{alignSelf:'center'}}/>
                      <p>Fish</p>
                      <IoIosArrowForward style={{marginLeft:'auto',alignSelf:"center"}}/> 
                    </div>
                  
                  </li>
                </Link>
                <Link to="/fresh_product" style={{textDecoration:'none'}} activeClassName="active_product">
                  <li className="menu__items">
                    <div className="icon_description">
                      <FaCarrot style={{alignSelf:'center'}}/>
                      <p>Fresh Product</p>
                      <IoIosArrowForward style={{marginLeft:'auto',alignSelf:"center"}}/> 
                    </div>
                  </li>
                </Link>
                <Link to="/meat_and_chicken" style={{textDecoration:'none'}} activeClassName="active_product">
                  <li className="menu__items">
                    <div className="icon_description">
                      <GiChicken style={{alignSelf:'center'}}/>
                      <p>Meat and Chicken</p>
                      <IoIosArrowForward style={{marginLeft:'auto',alignSelf:"center"}}/> 
                    </div>
                  </li>
                </Link>
                <Link to="/biscuits_and_cakes" style={{textDecoration:'none'}} activeClassName="active_product">
                  <li className="menu__items">
                    <div className="icon_description">
                      <BiCake style={{alignSelf:'center'}}/>
                      <p>Biscuits and Cakes</p>
                      <IoIosArrowForward style={{marginLeft:'auto',alignSelf:"center"}}/> 
                    </div>
                  </li>
                </Link>
                <Link to="/drinks" style={{textDecoration:'none'}} activeClassName="active_product">
                  <li className="menu__items">
                    <div className="icon_description">
                      <BiDrink style={{alignSelf:'center'}}/>
                      <p>Drinks</p>
                      <IoIosArrowForward style={{marginLeft:'auto',alignSelf:"center"}}/> 
                    </div>
                  </li>
                </Link>
                <Link to="/grocery" style={{textDecoration:'none'}} activeClassName="active_product">
                  <li className="menu__items">
                    <div className="icon_description">
                      <GiConcreteBag style={{alignSelf:'center'}}/>
                      <p>Grocery</p>
                      <IoIosArrowForward style={{marginLeft:'auto',alignSelf:"center"}}/> 
                    </div>
                  </li>
                </Link>
                <Link to="/beauty_and_hygiene" style={{textDecoration:'none'}} activeClassName="active_product">
                  <li className="menu__items">
                    <div className="icon_description">
                      <GiBowTieRibbon style={{alignSelf:'center'}}/>
                      <p>Beauty & Hygiene</p>
                      <IoIosArrowForward style={{marginLeft:'auto',alignSelf:"center"}}/> 
                    </div>
                  </li>
                </Link>
                </div>
                :
                null
              }
            </ul>
          </div>
    )
}

export default Sidebar_elements;





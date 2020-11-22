import React,{useState,useEffect} from 'react'
import {NavLink as Link} from 'react-router-dom';
import Aos from "aos"
import Fade from 'react-reveal/Fade'
import Jump from 'react-reveal/Jump'
import "aos/dist/aos.css"
import Carousel from "./Carousel"
import './Home.css';
import Header from "./Header"
import {all_items} from "./all_items"
import Footer from './Footer';
import Sidebar_elements from "./Sidebar_elements"
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import "owl.carousel/dist/assets/owl.theme.default.min.css"
import HomeIcon from '@material-ui/icons/Home';
import LiveHelpOutlinedIcon from '@material-ui/icons/LiveHelpOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import ExpandLessOutlinedIcon from '@material-ui/icons/ExpandLessOutlined';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import {BiDrink} from "react-icons/bi"
import {GiChicken,GiBeerBottle,GiMilkCarton,GiPieSlice,GiConcreteBag} from "react-icons/gi"
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import {BiCake} from 'react-icons/bi'
import {MdLocalMall} from 'react-icons/md'
import {IoIosArrowForward} from 'react-icons/io'
import InfiniteScroll from 'react-infinite-scroller';
import ScrollToTop from "react-scroll-to-top"
import styled from "styled-components"
import {Discount_Items} from "./Discount_Items"
import Discount_ProductList from './Discount_ProductList';
import Product from "./Product"

function Home() {

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = ()=> setSidebar(!sidebar);

    useEffect(() => {
        return () => {
            Aos.init({duration:1200});
        }
    }, [])

    const [searchTerm, setSearchTerm] = React.useState("");
    const [searchResults, setSearchResults] = React.useState([]);
    const handleChange = event => {
        setSearchTerm(event.target.value);
      };
    
      useEffect(() => {
      const results = all_items.filter(item =>
        item.product_name.toLowerCase().includes(searchTerm.toLowerCase())
        
      );
      setSearchResults(results);
    }, [searchTerm]);

    const res = searchResults.map((item)=>{
            return <Product 
                   key={item.id}
                   id={item.id}
                   product_name={item.product_name}
                   unit={item.unit}
                   image={item.image}
                   price={item.price}
                   />

    })

    return (
    <div>

      <Header searchTerm={searchTerm} handleChange={handleChange}/>      
      <ScrollToTop 
        color='whitesmoke'
        style={{background:'#4caf50',borderRadius:'50%',padding:'5px',border:"2px solid blue" }}
        smooth />
      <div className="home">
        <div className="page__leftside">
        <Sidebar_elements/>
        </div>
             
      </div>
      {
        searchResults.length < 143 ? 
           <div className="bakery__right" style={{width:"75%"}}>  
                {res} 
           </div> 
           :
           <>
        <div className="page__rightside">          
          <div className="page__rightside__img">
          <Carousel/>  
        </div>
          <Jump><h3>Our Product Categories</h3></Jump>
          <div className="Product_categories__list">
            <Link to="/fresh_product" style={{textDecoration:'none' , color:'black'}}>
              <div className="Product__category">
              <p className="what__product">
                  Fruits and Vegetables
              </p>
              <img src="Icons\apple.png" alt="bibhbazaar"/>
            </div>
          </Link>
          <Link to="/meat_and_chicken" style={{textDecoration:'none' , color:'black'}}>
          <div className="Product__category">
            <p className="what__product">
                Meat and Chicken
            </p>
            <img src="Icons\chicken.png" alt="bibhbazaar"/>
          </div>
          </Link>
          <Link to="/fish" style={{textDecoration:'none' , color:'black'}}>
            <div className="Product__category">
              <p className="what__product">
                  Fish
              </p>
              <img src="Icons\fish.png" alt="bibhbazaar"/>
            </div>
          </Link>
          <Link to="/grocery" style={{textDecoration:'none' , color:'black'}}>
            <div className="Product__category">
              <p className="what__product">
                  Cooking Essentials
              </p>
              <img src="Icons\cooking.png" alt="bibhbazaar"/>
            </div>
          </Link>
          <Link to="/bakery_and_snacks" style={{textDecoration:'none' , color:'black'}}>
            <div className="Product__category">
              <p className="what__product">
                  Bakery & Snacks
              </p>
              <img src="Icons\bread.png" alt="bibhbazaar"/>
            </div>
          </Link>
          <Link to="/drinks" style={{textDecoration:'none' , color:'black'}}>
            <div className="Product__category">
              <p className="what__product">
                  Beverages
              </p>
              <img src="Icons\drinks.png" alt="bibhbazaar"/>
            </div>
          </Link>

          <Link to="/beauty_and_hygiene" style={{textDecoration:'none' , color:'black'}}>
            <div className="Product__category">
              <p className="what__product">
                  Personal Care
              </p>
              <img src="Icons\personal_care.png" alt="bibhbazaar"/>
            </div>
          </Link> 
           <Fade> <h3>Special Offers</h3></Fade>

            <div className="all_discount__info">
                 <Discount_ProductList
                  Discount_Items={Discount_Items}
                  />
                  
            </div>
          </div>        
        </div>
        </>
      }
      {
        searchResults.length>6 ? 
        <>
            <div style={{height:"42vh"}}> </div>
            <Footer/> 
        </>                
          : 
          searchResults <2 ? 
        <>
            <div style={{height:"77.5vh"}}> </div>
            <Footer/>
        </>
        :
        <>
            <div style={{height:"72vh"}}> </div>
            <Footer/>
        </>
      }
    </div>
  );
}

export default Home;

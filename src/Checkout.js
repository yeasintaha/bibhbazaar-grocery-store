import React from 'react'
import Header from './Header';
import {useStateValue} from "./StateProvider"
import Checkout_Product from "./Checkout_Product"
import ScrollToTop from "react-scroll-to-top"
import {cart} from "./Add_To_Cart"
import { BiFontSize } from 'react-icons/bi'
import {RiDeleteBin2Line} from "react-icons/ri"
import "./Checkout_Product.css"
import { all_items } from './all_items';
import Checkout_Total from './Checkout_Total';
import Product from "./Product"
import { auth } from './firebase';
import Aos from "aos"
import "aos/dist/aos.css"
import FlipMove from 'react-flip-move';
import Slide from 'react-reveal/Slide';
import Footer from "./Footer"
import "./Checkout.css"

 

function Checkout() { 
    const [{cart,user},dispatch] = useStateValue();    
    const renderCart = cart.map((item,index)=>{        
        return <Slide><Checkout_Product product ={item} /></Slide> 
    })
    
    React.useEffect(() => {
        return () => {
            Aos.init({duration:1200});
        }
    }, [])

    const [searchTerm, setSearchTerm] = React.useState("");
    const [searchResults, setSearchResults] = React.useState([]);
    const handleChange = event => {
        setSearchTerm(event.target.value);
    };
    
      React.useEffect(() => {
      const results = all_items.filter(item =>
        item.product_name.toLowerCase().includes(searchTerm.toLowerCase())
        
      );
      setSearchResults(results);
      console.log(results);
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
        <div className="checkout">
            <ScrollToTop 
                color='whitesmoke'
                style={{background:'#4caf50',borderRadius:'50%',padding:'5px',border:"2px solid blue" }}
                smooth/>
            <Header searchTerm = {searchTerm} handleChange={handleChange}/>
            {
                searchResults.length < 143 ? 
                  <div  style={{width:"80%", display:"flex", flexWrap:"wrap",justifyContent:"center",alignItems:"center", marginLeft:"auto",marginRight:"auto"}}> {res} </div>
                    :
                    
                <div className="checkout__left__right">   
                    <div className="checkout__left">           
                    {
                        !user ? 
                        <div style={{background:"whitesmoke",border:"2px solid lightgray",marginBottom:"10px",borderRadius:"5px"}}>
                        <h3>Hello , Guest </h3> 
                        {
                            cart.length === 0 ? 
                                <h4 style={{margin:"15px"}}> Your cart is empty , Add some product in the cart </h4> 
                                :
                                <h4 style={{margin:"15px"}}> Your cart items </h4>
                        }
                        </div>
                        :
                        <div style={{background:"whitesmoke",border:"2px solid lightgray" , marginBottom:"10px",borderRadius:"5px"}}> 
                        <h3>Hello , {user?.email}</h3>
                        {
                            cart.length === 0 ? 
                                <h4 style={{margin:"20px"}}> Your cart is empty , Add some product in the cart </h4> 
                                :
                                <h4 style={{margin:"20px"}}> Your cart items </h4>
                        }
                        </div>
                    }               
                    {
                        renderCart
                    }
                    </div>  
                    <div className="checkout__right">
                        <Checkout_Total/>
                    </div>
                </div>                   
                
            }
            {
                cart.length <2 && searchResults.length===143 ? 
                <>
                    <div style={{height:"60vh"}}> </div>
                    <Footer/>
                </>
                :
                cart.length >=2 && searchResults.length ===143 ? 
                <>
                    <div style={{height:"30vh"}}> </div>
                    <Footer/>
                </>
                :
                 searchResults.length===0 ? 
                <>
                    <div style={{height:"72.5vh"}}> </div>
                    <Footer/>
                </>
                :                
                <>
                    <div style={{height:"35vh"}}> </div>
                    <Footer/>
                </>

            }
            
            
        </div>
    )
}

export default Checkout;

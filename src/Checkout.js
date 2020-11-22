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

    
    return (
        <div className="checkout">
            <ScrollToTop 
                color='whitesmoke'
                style={{background:'#4caf50',borderRadius:'50%',padding:'5px',border:"2px solid blue" }}
                smooth/>
            <Header/>
            <div data-aos="fade-right" className="checkout__left__right">   
                <div className="checkout__left">           
                {
                    !user ? <h3>Hello , Guest </h3> : <h3>Hello , {user?.email}</h3>
                }               
                {
                    renderCart
                }
                </div>  
                <div className="checkout__right">
                    <Checkout_Total/>
                </div>
             </div>
             {
                cart.length <2 ? 
                <>
                    <div style={{height:"60vh"}}> </div>
                    <Footer/>
                </>
                :
                <>
                    <div style={{height:"30vh"}}> </div>
                    <Footer/>
                </>

            }
        </div>
    )
}

export default Checkout;

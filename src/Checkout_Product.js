import React from 'react'
import { BiFontSize } from 'react-icons/bi'
import {RiDeleteBin2Line} from "react-icons/ri"
import Aos from "aos"
import "aos/dist/aos.css"
import "./Checkout_Product.css"
import { useStateValue } from './StateProvider'
import FlipMove from 'react-flip-move';
import Slide from 'react-reveal/Slide';

function Checkout_Product({product}) {
    const [{cart},dispatch] = useStateValue();
    const removeFromCart = () =>{
        dispatch({
            type : "REMOVE_FROM_CART",
            product : product,
        })
    }

    React.useEffect(() => {
        return () => {
            Aos.init({duration:1200});
        }
    }, [])

    return (
        <div data-aos="fade-right" className="checkout__product">  
            <div className="checkout_items">         
                <img src={product.image} alt=""/> 
                <div className="checkout__product__info">
                    <h4>{product.product_name}</h4>
                    <p>{product.unit}</p>
                    <h4><small>Tk</small>{product.price}</h4>
                </div>
            </div> 
            <RiDeleteBin2Line 
                onClick={removeFromCart}
                className="delete_item"  
                style={{marginLeft:"auto", marginRight:"20px",fontSize:"25px"}}/>
            
        </div>
        
    )
}

export default Checkout_Product

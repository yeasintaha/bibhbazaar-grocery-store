import React from 'react'
import {useStateValue} from "./StateProvider"
import {useHistory} from "react-router-dom"
import {db} from "./firebase"
import "./Checkout_Total.css"

function Checkout_Total() {
    const history = useHistory();
    const [{cart,user},dispatch] = useStateValue();
    let total =0;
    const Total_Price = cart.map(item => total += item.price)
    //e => history.push('/payment') 
    const paymentMethod = ()=>{        
        if(!user){
            alert("You cannot proceed without login");
        }
        else if(total===0){
            alert("your cart is empty, add some products to checkout");
        }
        else if(total < 300){
            alert("You cannot order below 300 taka products");
        }
        else {
            history.push('/payment')
            db.collection('order_details').add({
                username: user.email,
                total_products:cart
            })
            dispatch({
                type:"EMPTY_THE_CART",                
            })            
        }        
    }

        
    return (
        <div className="checkout_total">
            <p>
            {
                cart.length===0 ? 
                "Your cart is empty"
                : 
                <div>
                    <p style={{display:"inline-block"}}> Total Products : <strong> {cart.length}</strong></p>
                    <p>Total Price : <small>Tk</small><strong>{total}</strong> </p>
                </div> 
            }                    
            </p>
            <button onClick={paymentMethod}>Proceed to Checkout</button>
        </div>
    )
}

export default Checkout_Total;


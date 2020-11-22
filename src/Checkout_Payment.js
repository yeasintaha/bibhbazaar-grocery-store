import React from 'react'
import {Link} from "react-router-dom"
import Header from "./Header"
import { useStateValue } from './StateProvider'
import "./Checkout_Payment.css"

function Checkout_Payment() {
    const [{cart,user}] = useStateValue();
    return (
        <div>
            <Header/>
             <div className='payment'>
                <Link to='/home' textDecoration="none">
                    <img
                        className="login__logo"
                        src='logo_banner\BibhBazaar1.png'
                        alt="BibhBazaar"                    
                    />
                </Link>            

                <div className='payment__box'>
                    <p>Hi, {user?.email} , </p>
                    <p>You order has been successfully accepted.</p>
                    <p>Thank You For Ordering From Our Store. </p>
                    <p>Soon, You Will Get Your Order.</p>
                    <Link to="/home"><button  className='return__home'>Return to home</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Checkout_Payment

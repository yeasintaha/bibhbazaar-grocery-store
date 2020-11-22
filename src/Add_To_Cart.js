import React from 'react'

export var cart = [];
export const addToCart = (product) => {
    cart = [...cart,product];
    console.log("this has been added to the cart " + cart)
       
}
export const removeFromCart = (product) => {
    for(let i=0;i<cart.length;i++){
        if(cart[i]===product){
            cart.splice(i,1);
            break;
        }
    }

    console.log("this has been removed from the cart " + cart.length)     
}


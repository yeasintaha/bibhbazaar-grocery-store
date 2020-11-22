import React from 'react'
import Discount_Products from './Discount_Products'
import {Discount_Items} from "./Discount_Items"
import styled from "styled-components";

const Discount_ProductList = ({Discount_Items}) => {
    const DiscountItems = Discount_Items && Discount_Items.map((discountitems) => {
        return (
            <Discount_Products  
            key={discountitems.id}               
            id={discountitems.id}
            product_name={discountitems.product_name}
            image={discountitems.image} 
            unit={discountitems.unit} 
            price={discountitems.price} 
            previousPrice={discountitems.previousPrice}
            /> 
        );
    });
    const Item_style = styled.div`
        display:flex;
        flex-wrap:wrap;
        margin-left:auto;
        margin-right:auto;
        justify-content:center;

        @media screen and (max-width:960px){
            display:flex;
            flex-wrap:wrap;
            justify-content: flex-start;
        }
        @media screen and (max-width:700px){
            display:flex;
            flex-wrap:wrap;
            justify-content: center;
        }
        
        
    `
    return ( 
        <div className="product__list">
        {
           <Item_style>
            {DiscountItems}
            </Item_style>  
        }
        </div>
    );
}

export default Discount_ProductList;
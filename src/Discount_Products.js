import React,{useState} from 'react'
import {useStateValue} from "./StateProvider"
import "./Discount_Products.css"


function Discount_Products({ id, product_name, image, price,previousPrice,unit}) {
    const [click, setClick] = useState(false);
    const [count,setCount] = useState(0);
    const [{cart},dispatch] = useStateValue();
      const addToCart = ()=>{
          dispatch({
            type:"ADD_TO_CART",
            item:{
              id:id,
              product_name : product_name,
              image : image,
              unit : unit,
              price : price,
            }
          })
      }
    return (
      <div className="discount__products">
        <div className="discount__product ">
          <div className="discount__image">
            <img src={image} alt=""  />
          </div>          
          <div className="discount__product__info">
            <p className="discount__productname">{product_name}</p>
            <p className="discount__unit">{unit}</p>
            <p className="discount__product__price">
              <small>Tk  </small>
              <strong>{price}</strong>
              <div className="discount__price__offer">
                
                <del><small>Tk  </small> {previousPrice}</del>
              </div>
            </p>

          </div>          
          <button onClick={addToCart} > <p> Add to Cart</p></button>

          {/* {click===true ? 
            <div className="discountplus__minus">
              <p className="discountminus__click"onClick={()=> setCount(count-1)}> - </p> 
              <p className="discountcount__click"> {count} </p> 
              <p className="discountplus__click" onClick={()=>setCount(count+1)}> + </p>
            </div>
              : 
            <button onClick={()=>setClick(true)} > <p> Add to Cart</p></button>
          } */}
        </div>
      </div>
  );
}


export default Discount_Products;
import React,{useEffect, useState} from 'react';
import MainPage from "./MainPage"
import Home from './Home'
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Signin from "./Signin"
import Checkout from "./Checkout";
import Complain_form from "./Complain_form";
import Bakery from "./Bakery";
import Dairy from "./Dairy";
import Fish from "./Fish";
import Biscuits_Cakes  from "./Biscuits_Cakes";
import Grocery from "./Grocery";
import Drinks from "./Drinks";
import Meat_and_Chicken from "./Meat_and_Chicken"
import Fresh_Product from "./Fresh_Product";
import All_Products from "./All_Products";
import Checkout_Payment from "./Checkout_Payment"
import Beauty_and_hygiene from './Beauty_and_hygiene';
import Show_Discount_Products from "./Show_Discount_Products"
import {auth} from "./firebase"
import { useStateValue } from './StateProvider';



function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } 
      else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router> 
      <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/home"  component={Home}/> 
          <Route path="/signin"  component={Signin}/> 
          <Route path="/checkout"  component= {Checkout}/>          
          <Route path="/complain"  component= {Complain_form}/>          
          <Route path="/bakery_and_snacks"  component= {Bakery}/>
          <Route path="/dairy"  component= {Dairy}/>  
          <Route path="/fish"  component= {Fish}/>  
          <Route path="/fresh_product"  component= {Fresh_Product}/>  
          <Route path="/biscuits_and_cakes"  component= {Biscuits_Cakes}/>          
          <Route path="/meat_and_chicken"  component= {Meat_and_Chicken}/>          
          <Route path="/drinks"  component= {Drinks}/>
          <Route path="/grocery"  component= {Grocery}/>          
          <Route path="/all_products"  component= {All_Products}/>          
          <Route path="/beauty_and_hygiene"  component= {Beauty_and_hygiene}/>          
          <Route path="/payment"  component= {Checkout_Payment}/>          
          <Route path="/discount_products"  component= {Show_Discount_Products}/>         
          
      </Switch>
           
    </Router>
  )
}

export default App;

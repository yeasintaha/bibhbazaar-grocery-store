import React,{useEffect} from 'react'
import Aos from "aos"  
import "aos/dist/aos.css"
import Header from "./Header"
import {all_items} from "./all_items"
import Sidebar_elements from "./Sidebar_elements"
import Product from "./Product"
import ScrollToTop from "react-scroll-to-top"
import Footer from "./Footer"
import "./Bakery.css"


function Dairy() {
    const Dairy_Items = all_items.map((item,index)=>{
        if(item.category==="Dairy")
        {
            return <Product 
                   key={index}
                   id={item.id}
                   product_name={item.product_name}
                   unit={item.unit}
                   image={item.image}
                   price={item.price}
                   />
        }

    })
   
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
        <div>
            <div className="bakery">
                <ScrollToTop 
                    color='whitesmoke'
                    style={{background:'#4caf50',borderRadius:'50%',padding:'5px',border:"2px solid blue" }}
                    smooth/>
                <Header searchTerm={searchTerm} handleChange={handleChange}/>  
                <div className="header__left">
                <Sidebar_elements/>  
                </div>
                <div data-aos="fade-right" className="bakery__right">                    
                    {
                        searchResults.length < 143 ? res : 
                        <>
                            <div className="common__header">                    
                            <h3 data-aos="fade-right">Dairy</h3>
                            </div>
                            {
                                Dairy_Items
                            }  
                            {/* <br/><br/> <br/> <br/> <br/> <br/> */}
                        </>
                    }
                </div> 
            </div>
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
    )
}

export default Dairy

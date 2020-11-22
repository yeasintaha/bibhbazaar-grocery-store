import React,{useState,useEffect}  from 'react';
import Header from "./Header";
import Footer from "./Footer"
import {db} from "./firebase"
import "./Complain_form.css";
import {useHistory} from "react-router-dom"
import {all_items} from "./all_items"
import Product from "./Product"
import ScrollToTop from "react-scroll-to-top";
import { Feedback } from '@material-ui/icons';


function Complaint_form() {
    const history = useHistory();
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

    const [form, setForm ] = useState([]);
    useEffect(()=>{
        db.collection('complain--form').orderBy('timestamp','desc').onSnapshot(snapshot =>{
            setForm(snapshot.docs.map(doc => ({id:doc.id, data : doc.data()}) ))
        })
    },[])
    console.log(form);

    const [name,setName] = useState("");
    const [contact,setContact] = useState("");
    const [date,setDate] = useState("");
    const [email,setEmail] = useState("");
    const [feedback,setFeedback] = useState("");
    const [issue,setIssue] = useState("");
    const [location,setLocation] = useState("");
    const [orderInfo,setOrderInfo] = useState("");
    const [complaintDetails,setComplaintDetails] = useState("");

    const handleSubmit =(e)=>{
        e.preventDefault();

        db.collection('complain--form').add({
            complaint_details: complaintDetails,
            contact:contact,
            date:date,
            email:email,
            feedback:feedback,
            issue:issue,
            location:location,
            name:name,
            order_info:orderInfo,
        })
        history.push('/payment')
        setName("");
        setContact("");
        setDate("");
        setEmail("");
        setFeedback("");
        setIssue("");
        setLocation("");
        setIssue("");
        setOrderInfo("");
        setComplaintDetails("")
    }
    console.log(name + " " + contact + " " + date + " " + issue);
    return (
        <div >
            <ScrollToTop 
                color='whitesmoke'
                style={{background:'#4caf50',borderRadius:'50%',padding:'5px',border:"2px solid blue" }}
                smooth/>
            <Header searchTerm={searchTerm} handleChange={handleChange}/>
            {
                searchResults.length < 143 ? 
                  <div  style={{width:"80%", display:"flex", flexWrap:"wrap",justifyContent:"center",alignItems:"center", marginLeft:"auto",marginRight:"auto"}}> {res} </div>
                    : 
                <div className="complain_form">
                <div className="statement">
                    <h3>Complaint Form</h3>
                    <br/>
                    <p> Please send us details about the incident you would like to report. Our Complaint Center will analyze your complaint and take the appropriate measures in order that the reported situation will not occur at any other time in the future. Please note that- Complaint must be submitted within 24hrs of receiving your products. </p>
                    <br/>

                </div>
                <form action="" method="GET" >
                    <div className="date_of_complaints">
                        <label htmlFor="Date of Complaints">Date of complaint ＊</label>
                        <input type="date" onChange={(e) => setDate(e.target.value)} placeholder="dd-mm-yyyy" required/>
                    </div>
                    <div className="name">
                        <label htmlFor="Name">Name ＊</label>
                        <input type="text" onChange={(e) => setName(e.target.value)} maxlength="30" required/>
                    </div>
                    <div className="order_info">
                        <label htmlFor="order info">Order Information ＊</label>
                        <input type="text" onChange={(e) => setOrderInfo(e.target.value)} maxlength="50" required/> 
                    </div>
                    <div className="contact_no">
                        <label htmlFor="contact no">Contact No ＊</label>
                        <input type="digit" onChange={(e) => setContact(e.target.value)} maxlength="11" required /> 
                    </div>
                    <div className="email_id">
                        <label htmlFor="email">Email ID ＊</label>
                        <input type="email" onChange={(e) => setEmail(e.target.value)} maxlength="50" required/> 
                    </div>
                    <div className="issue_type">
                        <label htmlFor="issue type">Issue Type ＊</label>
                        <select name="issue" onChange={(e) => setIssue(e.target.value)} className="issue" required>
                            <option value="0">Choose an Item </option>
                            <option value="1">Product Quality</option>
                            <option value="2">Product Missing</option>
                            <option value="3">Wrong Product Delivered</option>
                            <option value="4">Billing Issue</option>
                            <option value="5">Delivery Other Issue</option>
                            <option value="6">Other</option>
                        </select>
                    </div>
                    <div className="order_location" >
                        <label htmlFor="order location">Order Location ＊</label>
                        <input type="text" onChange={(e) => setLocation(e.target.value)} required/>
                    </div>
                    <div className="complaint_details">
                        <label htmlFor="complaint details">Complaints Details</label>
                        <textarea name="massage" onChange={(e) => setComplaintDetails(e.target.value)} rows="4" cols="30" ></textarea>
                    </div>
                    <div className="feedback">
                        <label htmlFor="feedback">Feedback</label>
                        <textarea name="message" onChange={(e) => setFeedback(e.target.value)} rows="4" cols="30" ></textarea>
                    </div>
                    <div className="submit">
                        <input type="submit" onClick={handleSubmit} value="Submit" id="Submit"/>
                    </div>
                </form>

                <div className="terms">
                    <p>Terms & Conditions</p>
                    <ul>
                        <li>➼ We take complaints very seriously and aim to respond to your complaints within 3 working days.</li>
                        <li>➼ All complaints should be addressed to our hotline #16469/This Form should be filled up with all the necessary information.</li>
                        <li>➼ Complaint must be submitted within 24hrs of receiving your products.</li>
                    </ul>
                </div>
            </div>
            }
            {
                searchResults.length===143 ? 
                <>
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

export default Complaint_form;

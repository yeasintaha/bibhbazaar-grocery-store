import React,{useState} from 'react'
import {Link,useHistory} from "react-router-dom"
import {auth} from "./firebase"
import Header from "./Header"
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import "./Signin.css"

function SignUp() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const history = useHistory();
    
    const register = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) {
                    history.push('/signin')
                }
            })
            .catch(error => alert(error.message))
    }

    return ( 
        <div>
            <div className='login'>
                <Link to='/home' textDecoration="none">
                    <img
                        className="login__logo"
                        src='logo_banner\BibhBazaar1.png'
                        alt="BibhBazaar"                    
                    />
                </Link>            

                <div className='login__box'>
                    <h1>Sign Up</h1>
                    <form>
                        <h5>E-mail</h5>
                        <input type='text' value={email} onChange={e => setEmail(e.target.value)} required/>
                        <h5>Password</h5>
                        <input type='password' value={password} onChange={e => setPassword(e.target.value)} required />
                        <button onClick={register} className='login__registerButton'>Sign Up</button>
                    </form>
                    <label class="container" style={{alignSelf:"center"}}>
                        <input type="checkbox" checked style={{marginRight:"10px" , marginTop:"5px" }}/>
                        By signing up you agree to the BibhBazaar Conditions of Use & Sale. Please
                        see our Terms & Conditions to know more about our policy.                
                    </label>                    
                </div>
            </div>
        </div>
    )
}

export default SignUp;
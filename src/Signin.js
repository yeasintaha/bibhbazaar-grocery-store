import React,{useState} from 'react'
import {Link,useHistory} from "react-router-dom"
import {auth} from "./firebase"
import Header from "./Header"
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import "./Signin.css"

function Signin() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const history = useHistory();
    
    const signin = e => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/home')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) {
                    history.push('/home')
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
                    <h1>Sign In</h1>
                    <form>
                        <h5>E-mail</h5>
                        <input type='text' value={email} onChange={e => setEmail(e.target.value)} required/>
                        <h5>Password</h5>
                        <input type='password' value={password} onChange={e => setPassword(e.target.value)} required />
                        <button type='submit' onClick={signin} className='login__signInButton'>Sign In</button>
                    </form>
                    <label class="container" style={{alignSelf:"center"}}>
                        <input type="checkbox" checked style={{marginRight:"10px" , marginTop:"5px" }}/>
                        By signing in you agree to the BibhBazaar Conditions of Use & Sale. Please
                        see our Terms & Conditions to know more about our policy.                
                    </label>
                    <button onClick={register} className='login__registerButton'>Create BibhBazaar Account</button>
                </div>
            </div>
        </div>
    )
}

export default Signin;

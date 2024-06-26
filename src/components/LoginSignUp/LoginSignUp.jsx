import React, { useState } from 'react'
import './LoginSignUp.css'

import user_icon from '../Assets/user.png'
import email_icon from '../Assets/mail.png'
import password_icon from '../Assets/password.png'


const LoginSignUp = () => {
    const [action, setAction] = useState("Login");
    return (
        <div className='container'>
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action==="Login"?<div></div>:
                 <div className="input">
                 <img src={user_icon} alt=""/>
                 <input type="text" placeholder='name' />
             </div>}
               
                <div className="input">
                    <img src={email_icon} alt=""/>
                    <input type="email" placeholder='email id'/>
                </div>
                <div className="input">
                    <img src={password_icon} alt=""/>
                    <input type="password"  placeholder='password'/>
                </div>

            </div>
            {action==="Sign Up"? <div></div>: <div className="forgot-password">
                Forgot password <span>
                    Click Here!
                </span>
            </div>}
           
            <div className="submit-container">
                <button className={action==="Login"?"submit gray": "submit"} onClick={()=> {setAction("Sign Up")}}>Sign Up</button>
                <button className={action==="Sign Up"?"submit gray": "submit"} onClick={()=> {setAction("Login")}}>Login</button>
            </div>

        </div>
    )
}

export default LoginSignUp

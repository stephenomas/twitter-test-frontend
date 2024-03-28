import React, { useEffect } from 'react';
import axios from 'axios';
import { authenticate } from '../api_config';



const Login = () => {
  

  //   useEffect(() => {
  
  // console.log("test")
  //   }, [])
   
  


    return (
      <div className="showcase">
      <div className="showcase-content">
        <div className="showcase-top">
          <h1>LOGIN</h1>
        </div>
        <div className="formm">
          
            <h2>Welcome user!
            </h2>
            <div className="info">
             
            </div>
            <div className="login-btn">
            <a href="https://twitter.com/i/oauth2/authorize?response_type=code&client_id=aWNBQUN1eXB3SWxiMmdZY1N4NFk6MTpjaQ&redirect_uri=http://localhost:3000/verify&scope=tweet.read%20users.read%20follows.read%20space.read%20mute.read%20like.read%20list.read%20block.read%20bookmark.read%20dm.read%20dm.write%20offline.access&state=state&code_challenge=challenge&code_challenge_method=plain">  <button className="login-btn btn-primary" type="submit">Sign In with X</button>   </a> 
            </div>
            <div className="help">
             
            </div>
           
  
        </div>
      </div>


       

    </div>

    
           
      
        )
}

export default Login;
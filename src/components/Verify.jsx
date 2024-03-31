import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { authenticate, get_token, send_message } from "../api_config";
import { generateRandomString } from "../utils";



const Verify = () => {

    const navigate = useNavigate()
   const [isloading, setLoading] =  useState(false);
    const location = useLocation();

    const send_otp = async (code) => {
        let token = get_token()
        if(!token){
            await  authenticate(code)
            token = get_token()

        }
        const otp = generateRandomString(6)
         send_message(otp)

    }
    
    const checking = (e) => {
    
        setLoading(true);
        setTimeout(() => {
            navigate('/')
        }, 3000)
        
    }


    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const keyParam = params.get('code');
        send_otp(keyParam)

      }, [location.search]);


return (
    <div className="showcase">
      <div className="showcase-content">
        <div className="showcase-top">
          <h1>Verify</h1>
        </div>
        <div className="formm">
          
            <h3 >Kindly Check your twitter DM for OTP sent to you
            </h3>
            <div className="info">
              <input className="email" type="email" placeholder="OTP" id="email" /> 
        
            </div>
            <div className="btn">
              <button className="btn-primary" type="submit" onClick={ () =>checking()} >{isloading ? 'Verifying...' : 'Verify'}</button>
            </div>
            <div className="help">
             
            </div>
          
  
        </div>
      </div>
     
    </div>

    
)

}


export default Verify;
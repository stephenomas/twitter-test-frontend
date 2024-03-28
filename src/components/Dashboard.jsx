import React, { useEffect } from 'react';
import axios from 'axios';
import { authenticate, get_token } from '../api_config';
import { Navigate, useNavigate } from 'react-router-dom';



const Dashboard = () => {
  const navigate = useNavigate()

  //   useEffect(() => {
  
  // console.log("test")
  //   }, [])
   
  if(!get_token()){
   return <Navigate to={'/login'} replace/>
  }


    return (
      <div className="showcase">
      <div className="showcase-content">
        <div className="showcase-top">
          <h1>Dashboard</h1>
        </div>
        <div className="formm">
          
            <h2>Welcome user!
            </h2>
            <div className="info">
             
            </div>
            <h3>This is your dashboard</h3>
            <div className="help">
             
            </div>
           
  
        </div>
      </div>


       

    </div>

    
           
      
        )
}

export default Dashboard;
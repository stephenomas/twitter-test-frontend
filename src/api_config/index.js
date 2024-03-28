
export const get_token = () => {
    return localStorage.getItem('twitter_token')
}
export const  authenticate = (code) =>{

    const token = localStorage.getItem('twitter_token')

     if(!token){
        const requestOptions = {
            method: 'GET',
            headers: {
              'accept' : 'application/json',
              'Content-Type': 'application/json', // Specify the content type as JSON
           
            },
          //   body: {
          //     key : process.env.REACT_APP_TWITTER_KEY
          //     , secret : process.env.REACT_APP_TWITTER_SECRET
          // }, // Convert data to JSON string
          };
          
          const url = `http://localhost:8000/api/authenticate?secret=${process.env.REACT_APP_TWITTER_SECRET}&code=${code}&client_id=${process.env.REACT_APP_CLIENT_ID}`; // Replace with your API endpoint
          try {
          fetch(url, requestOptions)
            .then(response => {
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              return response.json(); // Parse response JSON
            })
            .then(data => {
                localStorage.setItem('twitter_token',data.access_token )
              
            })
            .catch(error => {
    
              console.error('There was a problem with the request:', error.message);
            });
        
          } catch (error) {
                console.log(error)
            }
        
     }

}

export const send_message = (otp) => {
   const token = get_token()
   
   const requestOptions = {
    method: 'GET',
    headers: {
      'accept' : 'application/json',
      'Content-Type': 'application/json', // Specify the content type as JSON
   
    },
//     body: {
//       token,
//       otp
//   }, // Convert data to JSON string
  };
  
  const url = `http://localhost:8000/api/message?token=${token}&otp=${otp}`; // Replace with your API endpoint
  try {
  fetch(url, requestOptions)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); // Parse response JSON
    })
    .then(data => {
        console.log(data)
        
    })
    .catch(error => {

      console.error('There was a problem with the request:', error.message);
    });

  } catch (error) {
        console.log(error)
    }

}




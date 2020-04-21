import Router from 'next/router';
import axios from "axios";

export const sendDataSignup = (dataSignup,message) => {
    axios({
      method: "post",
      url: 'https://apidocsbackend.herokuapp.com/api/v1/user/register/',
      data: dataSignup,
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => {
        if(response)
          alert(message.success);
          Router.push('/signin');
        
      })
      .catch((error) => {
        if(error)
        alert(message.failed);
      });
  };
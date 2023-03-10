import React, { useEffect } from "react";
import { useAuth0 } from '@auth0/auth0-react';






const HomePage = () => {
  const { isAuthenticated, user } = useAuth0();
  if (isAuthenticated) {

    return (
        <div>
          <h2>Hello, {user.name}</h2>
          <p>Thank you for visiting. Cras facilisis urna ornare ex volutpat, et
          convallis erat elementum. Ut aliquam, ipsum vitae
          gravida suscipit, metus dui bibendum est, eget rhoncus nibh
          metus nec massa. Maecenas hendrerit laoreet augue
          nec molestie. Cum sociis natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus.</p>
   
          <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
        </div>
    ); 
  }
  else{
    <div>Please tap on login.</div>
  }
}


 
export default HomePage;
import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import "./index.css";
//import "./components/login.css";
import { Auth0Provider } from '@auth0/auth0-react';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientID = process.env.REACT_APP_AUTH0_CLIENT_ID;
 
ReactDOM.render(
  <Auth0Provider
      domain={domain}
      clientId={clientID}
      redirectUri={window.location.origin}
      >
    <Main />
    </Auth0Provider>, 
  document.getElementById("root")
);
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import Main from "../../Main";

ReactDOM.render(
  <Auth0Provider
    domain="dev-6qn68x88w647px1k.us.auth0.com"
    clientId="9p42D3J1477c0p74gAjsbEDnPtg4E17k"
    redirectUri={window.location.origin}
  >
    <Main />
  </Auth0Provider>,
  document.getElementById("root")
);
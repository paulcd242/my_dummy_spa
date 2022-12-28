import React, { Component, useState } from "react";


import {
  Route,
  Link,
  BrowserRouter as Router,
  Switch,
  Routes,
} from "react-router-dom";
import HomePage from "./components/Home";
import StuffPage from "./components/Stuff";
import ContactPage from "./components/Contact";
import LoginButton from "./components/Login/Login";
import LogoutButton from "./components/Logout/Logout";
import { useAuth0, isAuthenticated } from "@auth0/auth0-react";



class Main extends Component {

  
    
    render() {
      return (
        <Router>
          <div>
            <h1>PAUL'S DEMO SPA</h1>
            <ul className="header">
            <li>
                < Link to="/home">Home</Link>
            </li>
            <li>
                <Link to="/about">About Us</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            
            </ul>
            <LoginButton />
            <LogoutButton/>
            <HomePage/>
            
      <Router>



      </Router>
            
           
            
            

            <Switch>
              
                
                <Route path="/about">
                    <StuffPage />
                </Route>
                <Route path="/contact">
                    <ContactPage />
                </Route>

            </Switch>   
            </div>
        </Router>
      );
    }
  }
 
export default Main;
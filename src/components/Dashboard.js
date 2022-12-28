import React, { Component, useState } from "react";


import {
  Route,
  Link,
  BrowserRouter as Router,
  Switch,
  Routes,
} from "react-router-dom";
import HomePage from "./Home";
import StuffPage from "./Stuff";
import ContactPage from "./Contact";
import Login from "./Login/Login";

/*export default function Dashboard() {
  return(
    <h2>Dashboard</h2>
  );
}*/

class MyApp extends Component {
    
    render() {
      return (
        <Router>
          <div>
            <h1>Paul's Demo SPA</h1>
            
            <ul className="header">
            <li>
                <Link to="/home">Home</Link>
            </li>
            <li>
                <Link to="/about">About Us</Link>
            </li>
            <li>
                <Link to="/contact">Contact Dem Boyz</Link>
            </li>
            </ul>
            
            

            <Switch>
            <Route exact path="/login">
                    <Login />
                </Route>
                <Route  path="/home">
                    <HomePage />
                </Route>
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
 
export default MyApp;

import React, {Component} from 'react';
import './App.css';
<<<<<<< HEAD
import {Navbar} from "react-bootstrap";
=======
import {Navbar, NavItem, Nav} from "react-bootstrap";
>>>>>>> 85100e3114585d769d22e6835abaaa20ee1cecb1
import { Link } from "react-router-dom";
import Routes from "./Routes";

export default class App extends Component{
  render() {
    return (<div className= "App container">
      <Navbar bg="dark" expand="lg">
        <Navbar.Brand>
          <Link to="/">Fisher Bookstore</Link>
        </Navbar.Brand>
<<<<<<< HEAD
=======
        <Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <NavItem>
                <Nav.Link href="/books"> Books </Nav.Link>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar.Brand>
        
>>>>>>> 85100e3114585d769d22e6835abaaa20ee1cecb1
      </Navbar>
      <Routes />
    </div>);
  }
}
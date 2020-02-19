import React, {Component} from 'react';
import './App.css';
import {Navbar, NavItem, Nav} from "react-bootstrap";
import { Link } from "react-router-dom";
import Routes from "./Routes";

export default class App extends Component{
  render() {
    return (<div className= "App container">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>
          <Link to="/">Fisher Bookstore</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
<<<<<<< HEAD
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <NavItem>
                <Nav.Link href="/books"> Books </Nav.Link>
              </NavItem>
            </Nav>
            <Nav>
=======
        <Navbar.Collapse className="justify-content-end">
          <Nav>
>>>>>>> 8a5e16e16a8517339fef147e1c11f7a0523e5933
            <NavItem>
              <Nav.Link href="/books"> Books </Nav.Link>
            </NavItem>
          </Nav>
<<<<<<< HEAD
          </Navbar.Collapse>
=======
        </Navbar.Collapse>
        
>>>>>>> 8a5e16e16a8517339fef147e1c11f7a0523e5933
      </Navbar>
      <Routes />
    </div>);
  }
}
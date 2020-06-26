import React from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import "./style.css"

function NavBar(props) {
  return (
    <header className="navigation m-4">
      <Navbar collapseOnSelect expand="lg" bg="custom-nav" >
        <Navbar.Brand className="p-2" href="/">Curbside</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <BrowserRouter >
            <Nav className="mr-auto">
              {/* vvv RegEx so when at "/" (aka homepage), upload and search don't appear */}
              <Route path={"/(.+)"}>
                <Nav.Link href="/upload">Upload</Nav.Link>
                <Nav.Link className="ml-2" href="/search">Search</Nav.Link>
              </Route>
            </Nav>
            <Nav>
              <Nav.Link className="mr-2" href="/signin">Sign In</Nav.Link>
              <Nav.Link className="" href="/signup">Sign Up</Nav.Link>
            </Nav>
          </BrowserRouter>
        </Navbar.Collapse>
      </Navbar>

    </header >
  )
}

export default NavBar;
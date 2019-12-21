import React, { Component } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import './CustomNavbar.css';

export default class CustomNavbar extends Component {
    render() {
        return (
            <Container>
            <Navbar bg="info" expand="lg">
            <Navbar.Brand href="#home"><img className="logo" src="assets/ab.png" alt=""></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link className="navbar-nav" href="/">Home</Nav.Link>
                <Nav.Link className="navbar-nav" href="./er">ER Verb</Nav.Link>
                <Nav.Link className="navbar-nav" href="./re">RE Verb</Nav.Link>
                <Nav.Link className="navbar-nav" href="./ir">IR Verb</Nav.Link>
                
              </Nav>
              
            </Navbar.Collapse>
          </Navbar>
          </Container>
        )
    }
}

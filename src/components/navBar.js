import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Link from 'react-router-dom/Link';


function NavbarComponent() {
    return (
        <Navbar nbg="dark" expand="lg" variant="dark">
            <Navbar.Brand href="/home">Jackson Eickhoff</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link className="navBarText" href="/home">Home</Nav.Link>
                <Nav.Link className="navBarText" href="/projects">Projects</Nav.Link>
                <Nav.Link className="navBarText" >Contact Me</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavbarComponent;
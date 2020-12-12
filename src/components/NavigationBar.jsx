import {Navbar, Nav} from 'react-bootstrap'
import React from 'react'


export function NavigationBar() {
    return (
        <div>
<Navbar bg="light" expand="lg" className= "border-bottom" fluid={true} >
  <Navbar.Brand href="#home" style={{fontFamily: 'Arvo', fontSize: '22px'}}>Guy Greenleaf</Navbar.Brand>
  <Navbar.Toggle  className="border-0" aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto font-weight-bold">
        <Nav.Link href="#resume">Resume</Nav.Link>
        <Nav.Link href="#github">Github</Nav.Link>
        <Nav.Link href='#contact'>Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
</Navbar>
        </div>
    )
}


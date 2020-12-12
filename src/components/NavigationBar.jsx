import {Navbar, Nav} from 'react-bootstrap'
import React from 'react'



export function NavigationBar() {

  function changeColor(e){
    e.preventDefault();
    e.target.style.color='grey'
  }

    return (
        <div>
<Navbar bg="dark" expand="lg" className= "border-bottom" fluid={true} >
  <Navbar.Brand href="#home" style={{fontFamily: 'Arvo', fontSize: '22px', color: 'white'}} id='tester' onClick={changeColor}>Guy Greenleaf</Navbar.Brand>
  <Navbar.Toggle  className="border-0" aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto font-weight-bold">
        <Nav.Link href="#resume" style={{color:'white'}} onClick={changeColor} >Resume</Nav.Link>
        <Nav.Link href="#github" style={{color:'white'}} onClick={changeColor}>Github</Nav.Link>
        <Nav.Link href='#contact' style={{color:'white'}} onClick={changeColor}>Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
</Navbar>
        </div>
    )
}


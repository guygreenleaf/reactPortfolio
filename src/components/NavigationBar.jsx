import {Navbar, Nav} from 'react-bootstrap'
import React from 'react'
import FadeIn from 'react-fade-in'



export function NavigationBar() {

  function changeColor(e){
    e.preventDefault();
    e.target.style.color='grey'
  }

    return (
      <div>
        <FadeIn transitionDuration='750'>
        <Navbar bg="dark" expand="md" className= "border-bottom" fluid={true} >
          <Navbar.Brand style={{fontFamily: 'Arvo', fontSize: '22px', color: 'white'}} id='tester'>Guy Greenleaf</Navbar.Brand>
          <Navbar.Toggle className="border-0" aria-controls="basic-navbar-nav" style={{backgroundColor: '#AEAFB5'}}/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto font-weight-bold">
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        </FadeIn>
      </div>
    )
}


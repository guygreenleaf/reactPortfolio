import {Navbar, Nav} from 'react-bootstrap'
import React from 'react'
import FadeIn from 'react-fade-in'



export function NavigationBar() {

    return (
      <div>
        <FadeIn transitionDuration='750'>
        <Navbar bg="dark" expand="md" className= "border-bottom" fluid={true} >
          <Navbar.Brand style={{fontFamily: 'Arvo', fontSize: '22px', color: 'white'}} id='tester'>Guy Greenleaf</Navbar.Brand>
        </Navbar>
        </FadeIn>
      </div>
    )
}


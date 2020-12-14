import React from 'react';
import FadeIn from 'react-fade-in';
import MyForest from './imgs/forest.jpg'
import { MDBJumbotron, MDBContainer, MDBRow} from "mdbreact";


export function Introduction() {
    return (
        <div style={{marginTop:'50px', marginRight:'310px', marginLeft:'200px'}}>
            <FadeIn transitionDuration='1100'>
            <MDBJumbotron fluid className="z-depth-4" style={{/*backgroundColor: '#748F9A',*/ background:'linear-gradient(110deg, #748F9A 60%, #3C9E99 60%)', minWidth:'250px', border:'1px black', borderRadius:'9px'}}>
            <MDBRow>
            <img className="z-depth-4 img-fluid" src={MyForest} style={{marginLeft:'50px', height:'200px', border:'1px black', borderRadius:'95px'}} alt='me'></img>
            <MDBContainer>
            <h1 style={{fontFamily:'Arvo'}}>Hey!</h1>
                <h2 style={{fontFamily:'Arvo', fontSize:'22px', letterSpacing:'1px'}}>
                My name's Guy and I'm a software engineer and Computer Science student at Sonoma State University.
                On this page you'll find links to my resume, github, and a contact form. I'm primarily interested in the UI/Frontend world.
                </h2>
            </MDBContainer>
            </MDBRow>
            </MDBJumbotron>
            </FadeIn>
        </div>
    )
}



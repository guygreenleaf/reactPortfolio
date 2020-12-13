import React from 'react';
import {Jumbotron, Container, Image, Row} from 'react-bootstrap';
import FadeIn from 'react-fade-in';
import MyForest from './imgs/forest.jpg'

export function Introduction() {
    return (
        <div style={{marginTop:'50px', marginRight:'310px', marginLeft:'200px'}}>
            <FadeIn transitionDuration='1100'>
            <Jumbotron fluid className="z-depth-4" style={{backgroundColor: '#CBD4CE'}}>
            <Row>
            <Image className="z-depth-4" src={MyForest} style={{marginLeft:'50px', height:'200px', border:'1px black', borderRadius:'95px'}}></Image>
            <Container>
            <h1 style={{fontFamily:'Arvo'}}>Hey!</h1>
                <h2 style={{fontFamily:'Arvo', fontSize:'22px', letterSpacing:'1px'}}>
                My name's Guy and I'm a software engineer and Computer Science student at Sonoma State University.
                On this page you'll find links to my resume and github.  Please feel free to contact me at the link below!
                </h2>
            </Container>
            </Row>
            </Jumbotron>
            </FadeIn>
        </div>
    )
}



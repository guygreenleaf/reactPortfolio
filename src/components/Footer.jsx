import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {FaReact, FaBootstrap} from 'react-icons/fa';
import { SiJavascript } from "react-icons/si";



export function Footer() {
    return (
        <>
        <footer className= "mt-5"></footer>
        <Container fluid={true} style={{position:'fixed', bottom:'0', left:'0'}}>
            <Row className = "border-top justify-content-between p-3" style={{backgroundColor: '#343A40'}} >
                <Col className="p-0 d-flex justify-content-end" md={3.5} style={{fontFamily: 'Josefin Sans', fontSize: '20px', color:'white'}}>
                    Made by Guy Greenleaf with<Col> <FaReact size={26} style={{color: '#00BCD4'}}/> <SiJavascript size={25} style={{color:'yellow'}}  /> <FaBootstrap size={26} style={{color: '#DD8EE9'}}/> </Col>
                </Col>
            </Row>
        </Container>
        </>
    );
}



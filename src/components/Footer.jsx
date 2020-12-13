import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {FaReact, FaBootstrap, FaYarn} from 'react-icons/fa';
import { SiJavascript } from "react-icons/si";


export function Footer() {
    return (
        <>
        <footer className= "mt-5">
        <Container fluid={true} >
            <Row className = "border-top justify-content-between p-3" style={{backgroundColor: '#343A40', position: 'sticky'}} >
                <Col className="p-0 d-flex justify-content-end" md={6} style={{fontFamily: 'Josefin Sans', fontSize: '20px', color:'white'}}>
                    Made by Guy Greenleaf with<Col> <FaReact size={22} style={{color: '#00BCD4'}}/> <SiJavascript size={22} style={{color:'yellow'}}  /> <FaBootstrap size={22} style={{color: '#DD8EE9'}}/> <FaYarn size={22} style={{color: '#2C8EBB'}}/> </Col>
                </Col>
            </Row>
        </Container>
        </footer>
        </>
    );
}
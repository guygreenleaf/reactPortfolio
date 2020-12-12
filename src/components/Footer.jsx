import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {FaReact, FaBootstrap} from 'react-icons/fa';
import { SiJavascript } from "react-icons/si";



export function Footer() {
    return (
        <>
        <footer className= "mt-5" ></footer>
        <Container fluid={true}>
            <Row className = "border-top justify-content-between p-3">
                <Col className="p-0 d-flex justify-content-end" md={3.5} style={{fontFamily: 'Josefin Sans', fontSize: '25px'}}>
                    Made by Guy Greenleaf with<Col> <FaReact size={28} style={{color: '#00BCD4'}}/> <SiJavascript size={28} /> <FaBootstrap size={28}style={{color: '#533B78'}}/> </Col>
                </Col>
            </Row>
        </Container>
        </>
    );
}



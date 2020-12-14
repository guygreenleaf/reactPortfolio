import React from 'react';
import {FaReact, FaBootstrap, FaYarn} from 'react-icons/fa';
import { SiJavascript } from "react-icons/si";
import {MDBContainer, MDBRow, MDBCol} from 'mdbreact';
import FadeIn from 'react-fade-in';


export function Footer() {
    return (
        <FadeIn transitionDuration='1100'>
        <MDBContainer fluid >
            <MDBRow className = "border-top justify-content-between p-3" style={{backgroundColor: '#343A40', boxShadow:'0 50vh 0 50vh #343A40'}} >
                <MDBCol className="p-0 d-flex" md={'6'} style={{fontFamily: 'Josefin Sans', fontSize: '20px', color:'white'}}>
                    Built by Guy Greenleaf with <MDBCol> <FaReact size={22} style={{color: '#00BCD4'}}/> <SiJavascript size={22} style={{color:'yellow'}}  /> <FaBootstrap size={22} style={{color: '#DD8EE9'}}/> <FaYarn size={22} style={{color: '#2C8EBB'}}/> </MDBCol>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
        </FadeIn>

    );
}
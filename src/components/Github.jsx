import React from 'react'
import Card from 'react-bootstrap/Card';
import bigTree from './imgs/bigTree.jpg';
import coffee from './imgs/cffee.jpg'
import frost from './imgs/froster.jpg'
import FadeIn from 'react-fade-in'
import "mdbreact/dist/css/mdb.css";
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import light from './imgs/lights.jpg'

export function Github() {
    return (
        
        //CREATE "Photography" TEXT IMAGE PNG, OVERLAY IT ON CARD, TRANSITION IT ALL IN WITH FADE
        <div className="container-fluid d-flex justify-content-center" >

        <FadeIn transitionDuration='1100'>

            <Card className="z-depth-4 bouncing hover zoom" style={{position:'relative', width: '15rem', borderRadius: '8px', backgroundColor:'#8796AD'}}>            
                <Card.Img style={{borderRadius: '8px'}} variant="top" src={light}/>           
            </Card>

        </FadeIn>
        </div>
    )
}


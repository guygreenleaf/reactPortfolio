import React from 'react';
import Card from 'react-bootstrap/Card';
import citylights from './imgs/citylights.jpg';
import FadeIn from 'react-fade-in';
import "mdbreact/dist/css/mdb.css";



export function Contact() {
    return (
                
        //CREATE "Photography" TEXT IMAGE PNG, OVERLAY IT ON CARD, TRANSITION IT ALL IN WITH FADE
        <div className="container-fluid d-flex justify-content-center" >

        <FadeIn transitionDuration='1100'>

            <div>
            <Card className="z-depth-4 bouncing hover zoom" style={{height: 'auto', width: '15rem', borderRadius: '8px', backgroundColor:'#8796AD', cursor: 'pointer'}}>            
                <Card.Img style={{display: 'flex', borderRadius: '8px', height:'365px'}} variant="top" src={citylights}/>       
            </Card>
            </div>

        </FadeIn>
        </div>
    )
}
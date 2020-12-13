import React from 'react';
import Card from 'react-bootstrap/Card';
import frost from './imgs/froster.jpg';
import lights from './imgs/lights.jpg';
import FadeIn from 'react-fade-in';
import "mdbreact/dist/css/mdb.css";
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";


export function Resume() {
    return (
        
        //CREATE "Photography" TEXT IMAGE PNG, OVERLAY IT ON CARD, TRANSITION IT ALL IN WITH FADE
        <div style={{display: 'flex', flexDirection:'row', justifyContent:'center'}}>

        <FadeIn transitionDuration='1100'>
            <div>
            <Card className="z-depth-4 bouncing hover zoom" style={{width: '15rem', borderRadius: '8px', backgroundColor:'#8796AD'}}>            
                <Card.Img style={{borderRadius: '8px'}} variant="top" src={frost}/>       
            </Card>
            </div>

            {/* <div>
            <Card className="z-depth-4 bouncing hover zoom" style={{width: '15rem', borderRadius: '8px', backgroundColor:'#8796AD'}}>            
                <Card.Img style={{borderRadius: '8px'}} variant="top" src={lights}/>
                
                </Card>    
            </div>
             */}
        </FadeIn>
        

        </div>
       

    )
}


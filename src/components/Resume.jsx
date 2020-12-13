import React from 'react';
import Card from 'react-bootstrap/Card';
import frost from './imgs/froster.jpg';
import FadeIn from 'react-fade-in';
import "mdbreact/dist/css/mdb.css";


export function Resume() {
    return (
        
        <div className="container-fluid d-flex justify-content-center" >

        <FadeIn transitionDuration='1100'>

            <div>
            <Card className="z-depth-4 bouncing hover zoom" style={{height: 'auto', width: '15rem', borderRadius: '8px', backgroundColor:'#8796AD', cursor: 'pointer'}}>            
                <Card.Img style={{borderRadius: '8px'}} variant="top" src={frost}/>       
            </Card>
            </div>

        </FadeIn>
        

        </div>
       

    )
}


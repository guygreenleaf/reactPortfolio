import React from 'react';
import { MDBCard, MDBCardTitle,MDBRow, MDBCol} from 'mdbreact';
import "mdbreact/dist/css/mdb.css";
import FadeIn from 'react-fade-in';

export const Contact = () => {
  return (

      <FadeIn>
        <MDBCard
          className='card-image z-depth-4 bouncing'
          style={{ border:'2px black', borderRadius:'40px',
            backgroundImage:
            "url('https://i.imgur.com/LwkqGAx.jpg')",
            cursor:
            "pointer",
            backgroundSize:'cover', 
            backgroundPosition:'center'
          }}>
          <div className='ripple text-white text-center d-flex align-items-center rgba-black-strong py-5 px-5' style={{border:'2px black', borderRadius:'40px'}} >
            <div>
              <MDBCardTitle tag='h3' className='pt-2'>
                <strong style={{margin:'25px'}}>Contact</strong>
              </MDBCardTitle>

            </div>
          </div>
        </MDBCard>
        </FadeIn>
  )
}

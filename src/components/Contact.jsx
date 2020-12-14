import React from 'react';
import { MDBCard, MDBCardTitle,MDBRow, MDBCol, MDBModal, MDBModalBody, MDBContainer, MDBBtn} from 'mdbreact';
import "mdbreact/dist/css/mdb.css";
import FadeIn from 'react-fade-in';
import {useState} from 'react'


export const Contact = () => {
  const [toggle, setToggle] = useState(false);

  
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
          }} onClick={() => setToggle(true)}>
          <div className='ripple text-white text-center d-flex align-items-center rgba-black-strong py-5 px-5' style={{border:'2px black', borderRadius:'40px'}} >
            <div>
              <MDBCardTitle tag='h3' className='pt-2'>
                <strong style={{margin:'25px'}}>Contact</strong>
              </MDBCardTitle>

            </div>
          </div>
        </MDBCard>


        <MDBContainer>
        <MDBModal isOpen={toggle}>
          <MDBModalBody style={{backgroundColor:'#748F9A'}}><h2 style={{marginBottom:'25px', marginLeft:'15px'}}>Please direct all inquiries to: </h2> <h3 style={{marginBottom:'25px', marginLeft:'15px'}}>guygreenleaf@icloud.com</h3></MDBModalBody>
            <div style={{paddingTop:'30px', backgroundColor:'#748F9A'}}>
            <MDBBtn color='dark' onClick={() => setToggle(false)} >
              Close
            </MDBBtn>
            </div>
        </MDBModal>
      </MDBContainer>
        </FadeIn>



          
  )
}

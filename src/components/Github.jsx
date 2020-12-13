import React from 'react';
import { MDBCard, MDBCardTitle, MDBBtn, MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import "mdbreact/dist/css/mdb.css";
import FadeIn from 'react-fade-in';

export const Github = () => {
  return (
    <MDBRow>
      <MDBCol>
      <FadeIn>
        <MDBCard
          className='card-image z-depth-4 bouncing hover zoom'
          style={{ border:'2px black', borderRadius:'40px',
            backgroundImage:
            "url('https://i.imgur.com/RpDocvX.jpg')",
            cursor:
            "pointer",
            marginRight:'225px'
          }}
        >
          <div className='text-white text-center d-flex align-items-center rgba-black-strong py-5 px-5' style={{border:'2px black', borderRadius:'40px'}} >
            <div>

              <MDBCardTitle tag='h3' className='pt-2'>
                <strong style={{textDecoration:'underline'}}>Github</strong>
              </MDBCardTitle>

              <div>
              <p>
                Click here to access my Github
              </p>
              </div>
            </div>
          </div>
        </MDBCard>
        </FadeIn>
      </MDBCol>
    </MDBRow>
  )
}

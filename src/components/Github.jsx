import React from 'react';
import { MDBCard, MDBCardTitle} from 'mdbreact';
import "mdbreact/dist/css/mdb.css";
import FadeIn from 'react-fade-in';

export const Github = () => {
  return (
      <FadeIn>
        <MDBCard className='card-image z-depth-4 bouncing' style={{ border:'2px black', borderRadius:'40px', backgroundImage:"url('https://i.imgur.com/RpDocvX.jpg')", backgroundSize:'cover', backgroundPosition:'center', cursor:"pointer"}}>
          <div className='text-white text-center d-flex rgba-black-strong py-5 px-5' style={{border:'2px black', borderRadius:'40px'}} >
            <div>
              <MDBCardTitle tag='h3' className='pt-2'>
                <strong>Github</strong>
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
  )
}

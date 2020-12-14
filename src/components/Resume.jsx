import React from 'react';
import { MDBCard, MDBCardTitle} from 'mdbreact';
import "mdbreact/dist/css/mdb.css";
import FadeIn from 'react-fade-in';


export const Resume = () => {
  return (
      <FadeIn>
        <MDBCard className='card-image z-depth-4 bouncing' style={{border:'2px black', borderRadius:'40px', backgroundImage: "url('https://i.imgur.com/O9ikKNh.jpg')", backgroundSize:'cover', backgroundPosition:'center', cursor:"pointer"}} >
          <div className='text-white text-center d-flex align-items-center rgba-black-strong py-5 px-5' style={{border:'2px black', borderRadius:'40px'}} >
            <div>
              <MDBCardTitle tag='h3' className='pt-2'>
                <strong>Resume</strong>
              </MDBCardTitle>
              <div>
              <p>
                Click here to access my resume
              </p>
              </div>
            </div>
          </div>
        </MDBCard>
        </FadeIn>
  )
}

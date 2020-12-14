import './App.scss'
import React from 'react';
import 'bootstrap/scss/bootstrap.scss'; 
import {useState} from 'react';


import {NavigationBar} from './components/NavigationBar'
import {Footer} from './components/Footer'
import {Resume} from './components/Resume'
import {Github} from './components/Github'
import {Contact} from './components/Contact'
import {Introduction} from './components/Introduction'
import {MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBContainer, MDBBtn} from 'mdbreact'

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    
    <div className="App" style={{backgroundColor: '#9DA39F', backgroundImage:'url("https://i.imgur.com/bQFIFU6.jpg")', backgroundRepeat:'no-repeat', WebkitBackgroundSize:'100%', backgroundSize:'cover', backgroundPosition:'center'}}>
    <NavigationBar/>
    
      <div>
        <Introduction></Introduction>
      </div>

      <div className="d-flex justify-content-center mx-auto" style={{ marginTop:'200px', marginBottom: '200px', marginRight:'200px', flexWrap: 'wrap', alignItems: 'flex-start'}}>
      <div style={{marginRight:'60px', marginBottom:'50px'}}>
      
      <Resume></Resume>
      </div>

      <div style={{marginBottom:'50px'}}>
       <Github></Github> 
       </div>


      <div style={{marginLeft:'60px', marginBottom:'50px'}} onClick={() => setToggle(true)}>
      <Contact></Contact>  
      </div>
      

      </div> 






    <Footer></Footer>

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
    
    </div>

  );
}

export default App;
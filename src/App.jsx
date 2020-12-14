import './App.scss'
import React from 'react';
import 'bootstrap/scss/bootstrap.scss'; 


import {NavigationBar} from './components/NavigationBar'
import {Footer} from './components/Footer'
import {Resume} from './components/Resume'
import {Github} from './components/Github'
import {Contact} from './components/Contact'
import {Introduction} from './components/Introduction'


function App() {
  return (
    <div className="App" style={{backgroundColor: '#9DA39F', backgroundImage:'url("https://i.imgur.com/W8b8XKC.jpg")', backgroundRepeat:'no-repeat', WebkitBackgroundSize:'100%', backgroundSize:'cover', backgroundPosition:'center'}}>
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

      <div style={{marginLeft:'60px', marginBottom:'50px'}}>
      <Contact></Contact>  
      </div>

      </div> 





    <Footer></Footer>

    </div>

  );
}

export default App;
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
    <div className="App" style={{backgroundColor: '#9DA39F'}}>
    <NavigationBar/>
    
    <div>
    <Introduction></Introduction>
    </div>


      <div style={{display:'flex', justifyContent:'center', marginTop:'200px', marginBottom: '200px'}}>
      <Resume></Resume>
      <Github></Github>
      <Contact></Contact>

      {/* <Resume></Resume>
      <Github></Github>
      <Contact></Contact> */}
      </div>





    <Footer></Footer>

    </div>

  );
}

export default App;
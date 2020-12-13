import './App.scss'
import React from 'react';
import 'bootstrap/scss/bootstrap.scss'; 


import {NavigationBar} from './components/NavigationBar'
import {Footer} from './components/Footer'
import {Resume} from './components/Resume'
import {Github} from './components/Github'


function App() {
  return (
    <div className="App" style={{backgroundColor: '#F2F2F0'}}>
    <NavigationBar/>



      <div style={{display:'flex', justifyContent: 'center', marginLeft:'125px', marginRight:'125px', marginTop:'200px', marginBottom: '200px'}}>
      <Resume></Resume>
      <Github></Github>
      </div>





    <Footer></Footer>

    </div>

  );
}

export default App;
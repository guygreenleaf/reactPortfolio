import './App.scss'
import React from 'react';
import 'bootstrap/scss/bootstrap.scss'; 


import {NavigationBar} from './components/NavigationBar'
import {Footer} from './components/Footer'
import {Photography} from './components/Photography'

function App() {
  return (
    <div className="App">
    <NavigationBar/>

    {/* <Photography></Photography> */}


    <Footer></Footer>


    </div>

  );
}

export default App;
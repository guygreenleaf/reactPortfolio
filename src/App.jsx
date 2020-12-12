import './App.scss'
import React from 'react';
import 'bootstrap/scss/bootstrap.scss'; 


import {NavigationBar} from './components/NavigationBar'
import {Footer} from './components/Footer'

function App() {
  return (
    <div className="App">
    <NavigationBar/>


    <Footer/>
    </div>
  );
}

export default App;
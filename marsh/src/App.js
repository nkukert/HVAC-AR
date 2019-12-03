import React, { useState } from 'react';
import Home from './components/Home.js';
import Explore from './components/Explore.js';
import './App.css';
import './'

function App() {

  const[pageSelected, setPageSelected] = useState("home");

  if(pageSelected === "home"){
    return(
      <div>
      <Home 
      pageSelected = {pageSelected}
      setPageSelected = {setPageSelected}
      />
      </div>
    );
  }
  if(pageSelected === "explore"){
    return(
      <div>
        <Explore />
      </div>
    );
  }
}

export default App;

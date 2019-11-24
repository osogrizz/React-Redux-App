import React from 'react';
import Launches from './components/Launches'

import './App.css';


function App(props) {
  console.log(props)
  return (
    <div className="App">
      <h1>Space X Upcoming Launches</h1>
      <Launches />
    </div>
  );
}


export default App;

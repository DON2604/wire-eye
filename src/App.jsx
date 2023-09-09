import React from 'react';
import './App.css';
import TechyNavbar from './components/navbar'; 
import Status from './components/status';

function App() {
  return (
    <div className="App">
      <TechyNavbar />
      <Status/>
    </div>
  );
}

export default App;

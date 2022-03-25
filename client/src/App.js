import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

function App() {
  return(
    <>
      <Navbar/>
      <div className="app">
        <Sidebar/>
      </div>
    </> 
  );
}

export default App;

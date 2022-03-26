import React from 'react';
import './App.css';
import Chat from './Chat';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

function App() {
  return(
    <>
      <Navbar/>
      <div className="app">
        <Sidebar/>
        <Chat/>
      </div>
    </> 
  );
}

export default App;

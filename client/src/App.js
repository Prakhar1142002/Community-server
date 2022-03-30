import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Interest from './Interest';
import Music from './Music';
import Homepage from './Homepage';
import Profile from './Profile';
import Login from './Login';
import { auth } from './Firebase';
import { useStateValue } from './StateProvider';
import Dashboard from './Dashboard';

function App() {

  const [, dispatch] = useStateValue();

  useEffect(() => {
    // [] below means will only run once the app component loads 
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        // The user just/was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])


  return(
    <BrowserRouter>
  
    <Routes>
      <Route path='/' element={ <Dashboard/> } />
      <Route path='/home' element={ <Homepage/> } />
      <Route path='/interest' element={ <Interest/> } />
      <Route path='/music' element={ <Music/> } />
      <Route path='/profile' element={ <Profile/> } />
      <Route path='/login' element={ <Login/> } />
    </Routes>

    </BrowserRouter>
    
  );
}

export default App;

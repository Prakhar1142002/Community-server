import { Avatar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from './Firebase'
import Navbar from './Navbar'
import './Profile.css'
import { useStateValue } from './StateProvider'

export default function Profile() {

  const [{user}] = useStateValue();
  const logoutAction = ()=>{
      auth.signOut();
      console.log(auth);
  }
  return (
    <>
      <Navbar/>
      <h4>Hello, {user?.email} </h4>
      <div className="profile__dp">
        <Avatar className='dp'
        src='https://cdn.statusqueen.com/dpimages/thumbnail/Krishna_Dp-2574.jpg'
        />
        <Link to='/'>
          
          <button onClick={logoutAction} className='logout__button'>Logout</button>
        </Link>
      </div>
    </>
  )
}

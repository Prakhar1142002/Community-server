import React from 'react'
import './Navbar.css'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import InterestsIcon from '@mui/icons-material/Interests';
import { Avatar } from '@mui/material';

export default function Navbar() {
  return (
      <div className="navbar">

        <div className="navbar__logo" >
          DISCORD
        </div>

        {/* <div className="logo">
          <img src="" alt="Loading..." />
        </div> */}
        <div className="nav__search">
          <input placeholder='Search Here' className="input__search" type="text" />
          <SearchIcon className='search__icon'/>
        </div>
        <div className="nav__features">
          <div className="nav__features__logo">
            <HomeIcon className='home__icon' fontSize='large'/>
            <LibraryMusicIcon className='music__icon' fontSize='large'/>
            <InterestsIcon className='interest__icon' fontSize='large'/>
          </div>
          <div className="user__profile">
          <Avatar src="https://cdn.statusqueen.com/dpimages/thumbnail/Krishna_Dp-2574.jpg"/>
          </div>
        </div>
        
      </div>
  )
}

import React from 'react';
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import PeopleIcon from '@mui/icons-material/People';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SendIcon from '@mui/icons-material/Send';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Avatar } from '@mui/material';
import { IconButton } from "@mui/material"
import logo from './logo.png'

function Header() {
  return (
    <div className='header'>
        <div className='header__left'>
        <div className='img'> <img src={logo} alt="/" />
         <h2>MemoriesAR</h2> 
        </div>
            
             
            <div className='header__input'>
                <SearchIcon className='sricon' />
                <input size={50} type="text" placeholder='Search' />
            </div>
            
        </div>

        <div className='header__center'>
           
            
            <div className='header__option'>
                <HomeIcon fontSize='large' />
            </div>
            <div className='header__option'>
                <BookmarksIcon fontSize='medium' />
            </div>
            <div className='header__option'>
                <PeopleIcon fontSize='large' />
            </div>
            
        </div>

        <div className='header__right'>
            <div className='header__info'>
                <Avatar />
                <h4>Ms2073</h4>
            </div>

            <IconButton>
                <NotificationsIcon />
            </IconButton>
            <IconButton>
                <SendIcon/>
            </IconButton>
            <IconButton>
                <PersonAddIcon />
            </IconButton>
            
        </div>

    </div>
  )
}

export default Header
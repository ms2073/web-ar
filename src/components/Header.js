import React from 'react';
import styles from "./Header.module.css";
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
    <div className={styles.header}>
        <div className={styles.header__left}>
        {/* <div className='img'> <img src={logo} alt="/" />
        <h3>MemoriesAR</h3>
        </div> */}

        <div className={styles.imgTest} ><img src={logo} alt="" /></div>
            
            <h3 className={styles.temem}>MemoriesAR</h3>
             
            <div className={styles.header__input}>
                <SearchIcon className={styles.sricon} />
                <input size={50} type="text" placeholder='Search' />
            </div>
            
        </div>

        <div className={styles.header__center}>
           
            
            <div className={styles.header__option}>
                <HomeIcon fontSize='large' />
            </div>
            <div className={styles.header__option}>
                <BookmarksIcon fontSize='medium' />
            </div>
            <div className={styles.header__option}>
                <PeopleIcon fontSize='large' />
            </div>
            
        </div>

        <div className={styles.header__right}>
            <div className={styles.header__info}>
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
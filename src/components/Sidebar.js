import React from 'react'
import "./Sidebar.css";
import SidebarRow from './SidebarRow';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import InterestsRoundedIcon from '@mui/icons-material/InterestsRounded';
import BookmarksIcon from '@mui/icons-material/Bookmarks';


function Sidebar() {
  return (
    <div className='sidebar'>
        <SidebarRow className="title" Icon={GridViewRoundedIcon} title='Posts'/>
        <br></br>
        
        <SidebarRow className="title" Icon={PersonRoundedIcon} title='Profile'/>
        <br></br>
        
        <SidebarRow className="title" Icon={PeopleRoundedIcon} title='Friends'/>
        <br></br>
        
        <SidebarRow className="title" Icon={InterestsRoundedIcon} title='Interest'/>
        <br></br>
        
        <SidebarRow className="title" Icon={BookmarksIcon} title='Saved'/>
        <br></br>
        
    </div>
  )
}

export default Sidebar
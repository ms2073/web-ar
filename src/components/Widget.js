import React from 'react'
import './Widget.css';
import { Avatar, Button } from '@mui/material';
import FriendReq from './FriendReq';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';

function Widget() {
    return (
           

        
        <div className="widget">

           <div id="rectangle">
           <Avatar className="profilereq"   /> 
           <p className='name'>Elon Musk</p>
           <button className='accept'>Accept</button>

           <button className='decline'>Decline</button>
           </div>
           
            

            <div class="details">
                <h1>Suggestions</h1>
                
            </div>
            <div class="Suggestions">
                <FriendReq ImageURL="https://imgur.com/gallery/qOlpA" title="Akshay    " body="--- " Icon={PersonAddOutlinedIcon}/>
                <FriendReq ImageURL="https://imgur.com/gallery/Pxiz0Yu" title="Manish   " body=" ---" Icon={PersonAddOutlinedIcon} />
                <FriendReq ImageURL="https://imgur.com/gallery/O3EIPHp" title="Dhruv c  " body="--- " Icon={PersonAddOutlinedIcon} />
                <FriendReq ImageURL="https://imgur.com/gallery/9xCV5v1" title="Dhruv d   "  body="--- " Icon={PersonAddOutlinedIcon} />
                <FriendReq ImageURL="https://imgur.com/gallery/O5vj6wE" title="Rajannsh  " body=" ---" Icon={PersonAddOutlinedIcon} />
                <FriendReq ImageURL="https://imgur.com/gallery/4v6nmNV" title="Abdul Rahman   " body="--- " Icon={PersonAddOutlinedIcon} />
            </div>
        </div >
    )
}

export default Widget
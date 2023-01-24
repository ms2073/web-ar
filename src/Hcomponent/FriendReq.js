import React from 'react'
import './FriendReq.css';
import { Avatar } from '@mui/material';


function FriendReq({ ImageURL, title,body ,Icon }) {
    return (
        <div className="friendreq">
            <Avatar className="avatar" src={ImageURL} alt={title} />
            <h1>{title}</h1>
            <p>{body}</p>
            {Icon && <Icon />}
        </div>
    )
}

export default FriendReq
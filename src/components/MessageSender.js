import { Avatar } from '@mui/material';
import React, { useState } from 'react';
import './MessageSender.css';
import VideocamRoundedIcon from '@mui/icons-material/VideocamRounded';
import PhotoLibraryRoundedIcon from '@mui/icons-material/PhotoLibraryRounded';
import InsertEmoticonRoundedIcon from '@mui/icons-material/InsertEmoticonRounded';



function MessageSender() {
 

  const handleSubmit = (e) => {
    e.preventDefault();

    
    
  };

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar />
        <form>
          <input
            
            
            type="text"
            className="messageSender__input"
            placeholder={`What's on your mind,`}
          />
          
          <button onClick={handleSubmit} type="submit">
            Hidden Button
          </button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamRoundedIcon style={{ color: 'red' }} />
          <h3>Video</h3>
        </div>
        <div className="messageSender__option">
          <PhotoLibraryRoundedIcon style={{ color: 'green' }} />
          <h3>Photo</h3>
        </div>
        <div className="messageSender__option">
          <InsertEmoticonRoundedIcon style={{ color: 'orange' }} />
          <h3>Status</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
import React from 'react'
import MessageSender from './MessageSender';
import Post from "./Post";
import styles from './Feed.module.css';

function Feed() {
  return (
    <div className='feed'>
        
        <MessageSender />
        <Post />
     
    
    </div>
  )
}

export default Feed
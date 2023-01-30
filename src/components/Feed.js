import React from 'react'
import MessageSender from './MessageSender';
import { connect } from "react-redux";
import Post from "./Post";
import styles from './Feed.module.css';

function Feed({ posts }) {
  
    return (
      <div className="feed">
        <MessageSender />
        {posts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    );
  };
  
 
  
  export default Feed;
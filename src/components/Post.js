import React, { useState, useEffect } from 'react';
// import { connect } from 'react-redux';
// import { likePost, unlikePost, addComment } from '../actions/postActions';

import { Avatar } from '@mui/material';

import './Post.css';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import NearMeRoundedIcon from '@mui/icons-material/NearMeRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';

function Post({ post }) {

  const [text, setText] = useState('');

  // const handleLike = () => {
  //   if (post.likes.includes(userId)) {
  //     unlikePost(post._id);
  //   } else {
  //     likePost(post._id);
  //   }
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   addComment(post._id, { text });
  //   setText('');
  // };

  return (
    <div className="post">
      <div className="post__top">
        <Avatar className="post__avatar" />
        <div className="post__topInfo">
          <h3>{post.text}</h3>
          {/* <p>{new Date(timestamp?.toDate()).toUTCString()}</p> */}
        </div>
      </div>
      <div className="post__bottom">
        <p>{post.location}</p>
      </div>
      <div className="post__image">
        <img  alt="" />
      </div>

      <div className="post__options">
        <div className="post__option">
          <ThumbUpAltRoundedIcon  />
          <p>Like</p>
        </div>
        <div className="post__option">
          <ChatBubbleOutlineRoundedIcon />
          <p>Comment</p>
          <div className="comments">
        {post.comments.map(comment => (
          <p key={comment._id}>{comment.text}</p>
        ))}
      </div>
      <form >
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <button type="submit">Comment</button>
      </form>
    </div>
        </div>
        <div className="post__option">
          <NearMeRoundedIcon />
          <p>Share</p>
        </div>
        <div className="post__option">
          <AccountCircleRoundedIcon />
          <ExpandMoreRoundedIcon />
        </div>
      </div>
   
           
    );
  };
  
 
  export default Post;
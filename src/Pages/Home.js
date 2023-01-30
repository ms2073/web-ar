import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import axios from 'axios';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import Widget from "../components/Widget"
import Bottomright from '../components/Bottomright';
import style from './Home.module.css';
import { useAuthContext } from '../hooks/useAuthContext'


function Home() {
  const [posts, setPosts] = useState([]);
  const { user } = useAuthContext()
  const userId = `${user.userId}`

  useEffect(() => {
    const fetchData = async () => {
      console.log(userId)
      const result = await axios.post(`http://locahost:3002/api/posts/home/${userId}`, {
        userId,
      });
      setPosts(result.data);
    };

    fetchData();
  }, []);

  return (
    <div className={style.App}>
      <Header />
     
      <div className={style.app__body}>
      <Sidebar />
      
        <Feed  posts={posts} />
        
      
        
        {/* <Widget /> */}
      
        
       
      </div>
     
        
        <Bottomright />
      
    </div>
  )
}

export default Home
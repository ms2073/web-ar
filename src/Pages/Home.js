import React from 'react'
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import Widget from "../components/Widget"
import Bottomright from '../components/Bottomright';
import style from './Home.module.css';

function Home() {
  return (
    <div className={style.App}>
      <Header />
     
      <div className={style.app__body}>
      <Sidebar />
      
        <Feed />
        
      
        
        {/* <Widget /> */}
      
        
       
      </div>
     
        
        <Bottomright />
      
    </div>
  )
}

export default Home
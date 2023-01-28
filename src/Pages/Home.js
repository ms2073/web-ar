import React from 'react'
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import Widget from "../components/Widget"
import Bottomright from '../components/Bottomright';
import './Home.css';

function Home() {
  return (
    <div className="App">
      <Header />
      <div className='app__body'>
        <Sidebar />
        <div className='app__posts'>
        <Feed />
        </div>
        
       
      
        {/* sidebar*/}
      
      {/* widgets */}
       <Widget />
      </div>
      <Bottomright />
      
    </div>
  )
}

export default Home
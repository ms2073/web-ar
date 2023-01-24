import React from 'react'
import Header from '../Hcomponent/Header';
import Sidebar from '../Hcomponent/Sidebar';
import Feed from '../Hcomponent/Feed';
import Widget from '../Hcomponent/Widget';
import Bottomright from '../Hcomponent/Bottomright';
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
        <Widget />
       
      
        {/* sidebar*/}
      {/* feed*/}
      {/* widgets */}

      </div>
      <Bottomright />
      
    </div>
  )
}

export default Home
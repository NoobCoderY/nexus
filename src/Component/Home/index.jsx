import React from 'react';
import NavBar from './NavBar';
import "./index.css"
import Canvas from './Canvas';
import FeedCard from './FeedCard';
import Footer from './FeedCard/Footer/Footer';

const index = ({backGroundColor}) => {
 
  return (
    <div>
       <NavBar backGroundColor={backGroundColor} />
      <Canvas />
      <div style={{height: "970px"}}></div>
      <FeedCard />
      <div className='fake_black'></div>
     
    </div>
  );
}

export default index;

import React from 'react';
import Howitworks from '../components/Howitworks';
import './style.css';


function Home() {
  return (
    // <div className='bgimage' style={{backgroundImage: `url("https://source.unsplash.com/random/?salads")`}}>
    <div className='bgimage'>
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh'}}>
    <h1 className='bgtext'>Welcome to Fitness meal Planner!</h1></div>
    
   <Howitworks />
    </div>
  
  )
}

export default Home;

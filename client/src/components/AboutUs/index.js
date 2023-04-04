import React from 'react'
import './aboutus.css'
import mit from '../../images/mitch.jpg';
import dom from '../../images/dom.jpg';
import kav from '../../images/kav.JPG';


function AboutUs() {
  return (
    <>
    <div className='tab'>
    <div className='Cardabout' >
        <div className='upper-container'>
            <div className='image-container'>
                <img className='imgabout' src={mit} alt='' height='100px' width='100px' />
            </div>
        </div>
      <div className='lower-container'>
        <h3>Mitch</h3>
        <h4>Backend </h4>
        <p>I am interested in everything, I get passionate very quickly
🌱 I am currently learning SQL</p>
        <a href="https://github.com/MitchH10" className='link-github'> Check out our GitHub</a>
      </div>

      
    </div>

    <div className='Cardabout'>
        <div className='upper-container'>
            <div className='image-container'>
                <img className='imgabout' src={dom} alt='' height='100px' width='100px' />
            </div>
        </div>
      <div className='lower-container'>
        <h3>Dominic</h3>
        <h4>Backend </h4>
        <p>I am interested in backend. 
            I am very good at finding errors and deploy the project in heroku. 
        </p>
        <a href="https://github.com/Dom231" className='link-github'> Check out our GitHub</a>
      </div>

      
    </div>

    <div className='Cardabout'>
        <div className='upper-container'>
            <div className='image-container'>
                <img className='imgabout'src={kav} alt='' height='100px' width='100px' />
            </div>
        </div>
      <div className='lower-container'>
        <h3>Kavitha</h3>
        <h4>Frontend </h4>
        <p>I am interested in designing websites. My recent favorite is react bootstrap.</p>
        <a href="https://github.com/Kaviambi" className='link-github'> Check out our GitHub</a>
      </div>

      
    </div>
    
    </div>
   
    </>
  )
}

export default AboutUs

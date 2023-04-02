import React from 'react';
import calculate from '../../images/calculate.png';
import healthy from '../../images/healthy.png';
import mealplan from '../../images/mealplan.png';
import {WorkContainer, WorkCard, WorkH1, WorkH2, WorkIcon, WorkP, WorkWrapper } from './IndexElement';
import Carousel from 'react-bootstrap/Carousel';
import '../../bootstrap.min.css';
import Image from "react-bootstrap/Image";


const Howitworks = () => {
  return (
    <>
    
    <WorkContainer>
      <WorkH1>
        How it Works
      </WorkH1>
      <WorkWrapper>

        <WorkCard>
            <WorkIcon src={calculate}/>
            <WorkH2>Calculate Macros</WorkH2>
            <WorkP>Calculate your macros. </WorkP>
        </WorkCard>

        <WorkCard>
            <WorkIcon src={mealplan}/>
            <WorkH2>Pick your meal</WorkH2>
            <WorkP>Pick your favorite meal. </WorkP>
        </WorkCard>

        <WorkCard>
            <WorkIcon src={healthy}/>
            <WorkH2>Eat healthy</WorkH2>
            <WorkP>Enjoy your healthy eating. </WorkP>
        </WorkCard>

      </WorkWrapper>
 
      </WorkContainer>
      <div style={{display: 'block', padding: 30, alignItems: 'center', height: 'auto', backgroundColor:'black'}}>
      <h4 style={{fontSize:'4rem', color:'#fff', textAlign:'center', margin:'8px'}}>What Does Healthy Mean?</h4>
      <Carousel controls={false} style={{ width:'1000px',
 
  margin: 'auto'}}>
        <Carousel.Item interval={4000}>
          <Image
          style={{height:'40rem', alignTracks:'center'}}
            className="img" 
src={require('../../images/goal.jpg')} alt='first image'
           
          />
          <Carousel.Caption >
            <h1>You are more likely to reach your health goals. </h1>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <Image
           className='img'
            src={require('../../images/money.jpg')} 
            alt="Image Two"
            style={{height:'40rem'}}
          />
          <Carousel.Caption>
            <h1>It saves you lots of money.</h1>
           
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={500}>
          <Image
           className='img'
            src={require('../../images/nowaste.jpg')} 
            alt="Image Two"
            style={{height:'40rem'}}
          />
          <Carousel.Caption>
            <h1>Meal planning decreases food waste.</h1>
           
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    </>
  )
}

export default Howitworks;

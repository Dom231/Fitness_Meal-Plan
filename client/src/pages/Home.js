import React from 'react';
import Howitworks from '../components/Howitworks';
import './style.css';
import Card from 'react-bootstrap/Card';
import image from '../images/background.JPG';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

function Home() {
  return (
<>
<Card style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh'}}>
      <Card.Img src={image} alt="homepage-image"/>
      <Card.ImgOverlay>
        <Card.Title style={{fontSize:'5rem', color:'black', textAlign:'center', marginTop:'10%', fontWeight:'bold'}}>WELCOME TO FITNESS MEAL PLANNER
        </Card.Title>
          <Stack gap={4} className="col-md-8">
      <Button variant="primary" style={{fontSize: '2rem', marginLeft: '60%', marginRight:'10%', padding:'2rem'}} onClick={event => window.location.href='/calculator'}>Calculate Your Macros</Button>
      <Button variant="secondary" style={{fontSize: '2rem', marginLeft: '60%', marginRight:'10%',padding:'2rem'}} onClick={event => window.location.href='/signup'}>Sign Up</Button>
    </Stack>
    
      </Card.ImgOverlay>
    </Card>
   
   <Howitworks />
   </>
  
  )
}

export default Home;

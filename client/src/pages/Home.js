import React from 'react';
import Howitworks from '../components/Howitworks';
import './style.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Footer from '../components/Footer';


function Home() {
  return (
    <>
      <Card style={{ height: 'auto', backgroundColor: 'black' }}>
        <video className='background-video' autoPlay loop muted style={{ width: '100%' }}>
          <source
            src={require('../../src/videos/video1.mp4')}
            type="video/mp4"

          />
        </video>
        <Card.ImgOverlay>
          <Card.Title className='welcome' style={{ fontSize: '4vw', color: 'black', textAlign: 'center', marginTop: '15%', fontWeight: 'bold' }}>WELCOME TO FITNESS MEAL PLANNER
          </Card.Title>
          <Stack gap={4} className="col-md-8 homepage">
            <Button variant="primary" style={{ fontSize: '1vw', marginLeft: '60%', marginRight: '10%', padding: '2rem', borderRadius: '0.5rem' }} onClick={event => window.location.href = '/calculator'}>Calculate Your Macros</Button>
            <Button variant="primary" style={{ fontSize: '1.5vw', marginLeft: '60%', marginRight: '10%', padding: '2rem', borderRadius: '0.5rem' }} onClick={event => window.location.href = '/signup'}>Sign Up</Button>
          </Stack>

        </Card.ImgOverlay>
      </Card>

      <Howitworks />
      <Footer />
    </>

  )
}

export default Home;

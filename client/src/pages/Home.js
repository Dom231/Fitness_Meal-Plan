import React from 'react';
import Howitworks from '../components/Howitworks';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import CardGroup from 'react-bootstrap/CardGroup';
import './style.css';


function Home() {
  return (
    // <div className='bgimage' style={{backgroundImage: `url("https://source.unsplash.com/random/?salads")`}}>
    <div className='bgimage'>
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh'}}>
    <h1 className='bgtext'>Welcome to Fitness meal Planner!</h1></div>
    {/* <div> */}
    {/* <h2 className='bgtext' >How It<a href="/"><span className='highlight'>Works</span></a></h2></div> */}
    {/* <CardGroup>
      <Card style={{ width: '5rem', margin: '1rem' }}> 
        <Card.Img variant="top" src={require('../images/calculate.png')}  />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
       
      </Card>
      <Card style={{ width: '25rem', margin: '1rem' }}>
        <Card.Img variant="top" src={require('../images/mealplan.png')} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
     
      </Card>
      <Card style={{ width: '25rem', margin: '1rem', height: '25rem' }} >
        <Card.Img variant="top" src={require('../images/healthy.png')}/>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
       
      </Card>
    </CardGroup> */}
   <Howitworks />
    </div>
  
  )
}

export default Home;

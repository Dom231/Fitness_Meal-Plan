

import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
// import signup from '../../images/signup.png';
import './mealindex.css';
import React from 'react';
import {FaBurn} from 'react-icons/fa';

const Breakfast = () => {
   
    const FoodInfo = [
        {
            image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
            title: "Salad Bowl with veggies and dressing",
            Calorie: 250,
            
            Protein: 25,
            Carb: 120,
            Fat: 5,
            
        },
        {
            image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
            title: "Salad Bowl",
            Calorie: 450,
            Protein: 25,
            Carb: 120,
            Fat: 5,
            
        },
        {
            image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
            title: "Salad Bowl",
            Calorie: 450,
            Protein: 25,
            Carb: 120,
            Fat: 5,
            
        },
        {
            image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
            title: "Salad Bowl",
            Calorie: 450,
            Protein: 25,
            Carb: 120,
            Fat: 5,
            
        },
        {
            image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
            title: "Salad Bowl",
            Calorie: 450,
            Protein: 25,
            Carb: 120,
            Fat: 5,
            
        },
        {
            image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
            title: "Salad Bowl",
            Calorie: 450,
            Protein: 25,
            Carb: 120,
            Fat: 5,
            
        },
        {
            image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
            title: "Salad Bowl",
            Calorie: 450,
            Protein: 25,
            Carb: 120,
            Fat: 5,
            
        },
      
        {
            image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
            title: "Salad Bowl",
            Calorie: 450,
            Protein: 25,
            Carb: 120,
            Fat: 5,
            
        },
      
      
       
    
    ];

    const renderCard = (card, index) => {

    return (
        <Col className='tabs d-flex'>
<Card style={{width: '30rem'}} key={index} className='box'>
    <Card.Img variant='top'  src={card.image} />
    <Card.Body>
        <Card.Title className='title'>{card.title}</Card.Title>
        <Card.Body>
        <Card.Title className='macros'><FaBurn />Calorie: {card.Calorie}</Card.Title>
        <Card.Title className='macros'>Protein: {card.Protein}</Card.Title>
        <Card.Title className='macros'>Carb: {card.Carb}</Card.Title>
        <Card.Title className='macros'>Fat: {card.Fat}</Card.Title>
        </Card.Body>
        
    </Card.Body>
</Card>
</Col>

    );
    };
    return <div className='grid'>{FoodInfo.map(renderCard)}</div>;

};

export default Breakfast;

// {/* <CardGroup className='tabs' style={{padding: '2rem'}}>
//       <Card style={{margin: '2rem'}}>
//         <Card.Img variant="top" src={signup} />
//         <Card.Body>
//           <Card.Title>Food 1</Card.Title>
        
//         </Card.Body>
      
//       </Card>
//       </CardGroup> */}
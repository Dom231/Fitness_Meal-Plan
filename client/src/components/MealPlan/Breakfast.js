

import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
// import signup from '../../images/signup.png';
import './mealindex.css';
import React from 'react';
import {FaBurn} from 'react-icons/fa';


import { useQuery } from '@apollo/client';
import { QUERY_MEALS } from '../../utils/queries';





const Breakfast = () => {
   
    let FoodInfo = [
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

    const {loading, data} = useQuery(
        QUERY_MEALS,
        {
            variables: {

            }
        }
    )
    FoodInfo = data;  
    console.log(FoodInfo);
    const renderList = (obj) => {
        let list = [];
        const renderCard = (card, index) => {

                return (
                    <Col className='tabs d-flex'>
            <Card style={{width: '30rem'}} key={index} className='box'>
                <Card.Img variant='top'  src={card.image} />
                <Card.Body>
                    <Card.Title className='title'>{card.title}</Card.Title>
                    <Card.Body>
                    <Card.Title className='macros'><FaBurn />Calorie: {card.calories}</Card.Title>
                    <Card.Title className='macros'>Protein: {card.protein}</Card.Title>
                    <Card.Title className='macros'>Carb: {card.carbs}</Card.Title>
                    <Card.Title className='macros'>Fat: {card.fat}</Card.Title>
                    </Card.Body>
                    
                </Card.Body>
            </Card>
            </Col>

                );
    };
    console.log("input obj",obj.meals)
    for (const key in obj.meals) {
        const element=obj.meals[key];
        list.push(renderCard(element));
    }
    console.log("list", list)
    return list;
    }
    
    if (loading){
        return <div>Loading...</div>;
    }
    return <div className='grid'>{renderList(FoodInfo)}<h1>here we go!</h1></div>;

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
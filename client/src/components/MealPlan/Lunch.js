

import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
// import signup from '../../images/signup.png';
import './mealindex.css';
import React from 'react';
import {FaBurn} from 'react-icons/fa';
import { useMealContext } from '../../utils/MealContext';

import { useQuery } from '@apollo/client';
import { QUERY_MEALS_FILTERED } from '../../utils/queries';




const Lunch = () => {
    const {goals, lunchGoalNeeds, dinnerGoalNeeds, unsavedCalcInfo, workingBreakfast, workingLunch, workingDinner, addGoals, addLunchGoalNeeds, addDinnerGoalNeeds, addUnsavedCalcInfo, addBreakfast, addLunch, addDinner} = useMealContext();
    let search = {
        calories: Math.floor(lunchGoalNeeds.calories/2),
        protein: Math.floor(lunchGoalNeeds.protein/2),
        carbs: Math.floor(lunchGoalNeeds.carbs/2),
        fat: Math.floor(lunchGoalNeeds.fat/2)
    }
    console.log("lunch goals", search);
    const {loading, data} = useQuery(
        QUERY_MEALS_FILTERED,
        {
            variables: {
                calories: search.calories,
                protein: search.protein,
                carbs: search.carbs,
                fat: search.fat
            }
        }
    )
    let FoodInfo = data;  
    console.log(data);
    const handleClick = async (e) => {
        e.preventDefault();
        const {target} = e;
        let newT = target;
        //find right target for data info
        while (newT.className!=="tabs d-flex toppull col") {
            newT = newT.parentElement
        }
        
        if (newT.style.backgroundColor == "green") {
            newT.style.backgroundColor = "white";
            let meal = {
                id: null,
                title: null,
                calories: null,
                protein: null,
                fat: null,
                carbs: null,
                image: null
            }
            console.log(meal);
            await addLunch(meal);
        } else {
            newT.style.backgroundColor = "green"
            let meal = {
                id: parseInt(newT.dataset.id),
                title: newT.dataset.title,
                calories: parseInt(newT.dataset.calorie),
                protein: parseInt(newT.dataset.protein),
                fat: parseInt(newT.dataset.fat),
                carbs: parseInt(newT.dataset.carb),
                image: newT.dataset.image
            }
            console.log(meal);
            await addLunch(meal);
            let newGoals = {
                calories: lunchGoalNeeds.calories - meal.calories,
                protein: lunchGoalNeeds.protein - meal.protein,
                carbs: lunchGoalNeeds.carbs - meal.carbs,
                fat: lunchGoalNeeds.fat - meal.fat
            }
            console.log("after lunch",newGoals)
            await addDinnerGoalNeeds(newGoals);
        }
        //create meal obj with data info
        // let meal = {
        //     id: newT.dataset.id,
        //     title: newT.dataset.title,
        //     calories: newT.dataset.calorie,
        //     protein: newT.dataset.protein,
        //     fat: newT.dataset.fat,
        //     carbs: newT.dataset.carb,
        //     image: newT.dataset.image
        // }
        // console.log(meal);
        // addBreakfast(meal);

    }

    const renderList = (obj) => {
        let list = [];
        const renderCard = (card, index) => {

                return (
            <Col className='tabs d-flex toppull' key={index} 
            data-title={card.title} 
            data-image={card.image} 
            data-calorie={card.calories}
            data-protein={card.protein}
            data-carb={card.carbs}
            data-fat={card.fat}
            data-id={card.id} onClick={handleClick}>
                <Card style={{width: '30rem'}}  className='box'>
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
    for (const key in obj.mealsFiltered) {
        const element=obj.mealsFiltered[key];
        list.push(renderCard(element, element._id));
    }
    return list;
    }
    
    if (loading){
        return <div>Loading...</div>;
    }


    return <div className='grid'>
        
            {renderList(FoodInfo)}
        
        
        </div>;

};

export default Lunch;

// {/* <CardGroup className='tabs' style={{padding: '2rem'}}>
//       <Card style={{margin: '2rem'}}>
//         <Card.Img variant="top" src={signup} />
//         <Card.Body>
//           <Card.Title>Food 1</Card.Title>
        
//         </Card.Body>
      
//       </Card>
//       </CardGroup> */}
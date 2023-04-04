

import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
// import signup from '../../images/signup.png';
import './mealindex.css';
import React from 'react';
import {FaBurn} from 'react-icons/fa';
import { useMealContext } from '../../utils/MealContext';

import { useQuery, useMutation } from '@apollo/client';
import { QUERY_MEALS_FILTERED } from '../../utils/queries';
import { ADD_DAYPLAN } from '../../utils/mutations';
import { useNavigate } from 'react-router-dom';




const Dinner = () => {
   const {goals, lunchGoalNeeds, dinnerGoalNeeds, unsavedCalcInfo, workingBreakfast, workingLunch, workingDinner, addGoals, addLunchGoalNeeds, addDinnerGoalNeeds, addUnsavedCalcInfo, addBreakfast, addLunch, addDinner} = useMealContext();
   const [addDayPlan, {error}] = useMutation(ADD_DAYPLAN);
   const navigate = useNavigate();

    let search = {
        calories: Math.floor(dinnerGoalNeeds.calories),
        protein: Math.floor(dinnerGoalNeeds.protein),
        carbs: Math.floor(dinnerGoalNeeds.carbs),
        fat: Math.floor(dinnerGoalNeeds.fat)
    }
    console.log("dinner goals", search);
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
            addDinner(meal);
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
            addDinner(meal);

            //run mutation to add profile
            //redirect profile page
            const mdata = await addDayPlan({
                variables: {
                    title: "New Plan",
                    breakfast: workingBreakfast,
                    lunch: workingLunch,
                    dinner: workingDinner
                }, 
            });

            console.log(mdata);
            navigate('/me');
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
            data-id={index} onClick={handleClick}>
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
        list.push(renderCard(element, element.id));
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

export default Dinner;

// {/* <CardGroup className='tabs' style={{padding: '2rem'}}>
//       <Card style={{margin: '2rem'}}>
//         <Card.Img variant="top" src={signup} />
//         <Card.Body>
//           <Card.Title>Food 1</Card.Title>
        
//         </Card.Body>
      
//       </Card>
//       </CardGroup> */}
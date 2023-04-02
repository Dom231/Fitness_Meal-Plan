import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';
import { useMealContext } from '../../utils/MealContext';
import Auth from "../../utils/auth";


function Calculator() {
  const {goals, currentGoalNeeds, unsavedCalcInfo, addGoals, addCurrentGoalNeeds, addUnsavedCalcInfo} = useMealContext();
  const [age, setAge] = useState(0);
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [activityLevel, setActivityLevel] = useState('');
  const [weightGoal, setWeightGoal] = useState('');
  const [sex, setSex] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
  const {loading, data} = useQuery(
    QUERY_ME
  );

  const handleInputChange = (e) => {
    e.preventDefault();
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'Age') {
        setAge(parseInt(inputValue));
    } else if (inputType === 'Height') {
        setHeight(parseInt(inputValue));
    } else if (inputType === 'Weight'){
        setWeight(parseInt(inputValue));
    } else if (inputType === 'Activity') {
        setActivityLevel(inputValue);
    } else if (inputType === 'Sex') {
        setSex(inputValue);
    } else {
        setWeightGoal(inputValue);
    }
  };
  const handleFormSubmit = async (e) => {
    if (age == 0) {
        setErrorMessage('Please enter a value for age');
        return;
    }

    if (height == 0) {
        setErrorMessage(`Please enter a value for height`);
        return;
    }

    if (weight == 0) {
      setErrorMessage('Please enter a value for weight');
      return;
    }
    //calculator function
    //For men: BMR = 66.5 + (13.75 × weight in kg) + (5.003 × height in cm) - (6.75 × age)
    //For women: BMR = 655.1 + (9.563 × weight in kg) + (1.850 × height in cm) - (4.676 × age)
    let calGoal, carbGoal, proteinGoal, fatGoal;
    
    function calCalculator() {
      if (sex === 'Male') {
            calGoal = 66.5 + (13.75*(weight*0.453592)) + (5.003*height*2.54) - (6.75*age);
          } else {
            calGoal = 655.1 + (9.563*weight*0.453592) + (1.85*height*2.54) - (4.676*age);
          }
          calGoal = Math.floor(calGoal);
          switch (activityLevel) {
            case 'Sedentary': 
              calGoal = calGoal;
              break;
            case 'Light Activity':
              calGoal += 200;
              break;
            case 'Moderate Activity':
              calGoal += 400;
              break;
            case 'Very Active':
              calGoal += 600;
              break;
          }

          switch (weightGoal) {
            case 'Lose Weight':
              calGoal -= 500;
              break;
            case 'Maintain Weight':
              calGoal = calGoal;
              break;
            case 'Gain Weight':
              calGoal += 500;
              break;
          }
    }
    //1g protein per body weight
    //50% cal from carbs
    //rest is fat
    function macroCalc() {
      let calCalc = calGoal;
      proteinGoal = weight;
      calCalc -= proteinGoal*4;
      carbGoal = Math.floor((calGoal/2)/4);
      calCalc -= calGoal/2;
      fatGoal = Math.floor(calCalc/9);
    }
    calCalculator();
    macroCalc();
    console.log(weight,age,height, "  ", calGoal, proteinGoal)
    addUnsavedCalcInfo({
      weight: weight,
        age: age, 
        height: height,
        activityLevel: activityLevel,
        loseMaintainGain: weightGoal,
        calories: calGoal,
        protein: proteinGoal,
        carbs: carbGoal,
        fat: fatGoal
    });
    
    

    // alert(`Hello ${userName}`);
    try {
      
    } catch (err) {
        console.error(err);
    }
    };

    
  return (
    <div>

    <Card style={{marginLeft:'50rem', marginRight:'50rem', marginTop:'1rem'}}>
    {/* <Card.Img  style={{imageResolution:'2rem'}} src={cal} /> */}
    <Card.Title style={{textAlign:'center'}}><h1> Calculate your Macros </h1></Card.Title>
  
      <ListGroup >
        <ListGroup.Item>
        <div className='form-inputs'>
                        <label className='form-label'>Sex</label>
                        <Form.Select style={{borderRadius:'2px', fontSize:'1.5rem'}}className='form-inputs' name='Sex' onChange={handleInputChange}>
                          <option>Male</option>
                          <option>Female</option>
                        </Form.Select>
                        
                        <label className='form-label'>Age</label>
                        <input type='age' className='form-input' name='Age' placeholder='Enter your Age' onChange={handleInputChange}>
                        </input>
      
                        <label className='form-label'>Height (inches)</label>
                        <input type='height' className='form-input' name='Height' placeholder='Enter your height in Inches' onChange={handleInputChange}>
                        </input>
                    
                        <label className='form-label'>Weight (lbs)</label>
                        <input type='weight' className='form-input' name='Weight' placeholder='Enter your Weight in lbs' onChange={handleInputChange}>
                        </input>
                  
                    <label className='form-label'>Activity Level</label>
                    <Form.Select style={{borderRadius:'2px', fontSize:'1.5rem'}}className='form-inputs' name='Activity' onChange={handleInputChange}>
                   
        <option>Sedentary</option>
        <option>Light Activity</option>
        <option>Moderate Activity</option>
        <option>Very Active</option>
      </Form.Select>

      <label className='form-label'>Goal</label>
                    <Form.Select style={{borderRadius:'2px', fontSize:'1.5rem'}}className='form-inputs' type='wgoal' onChange={handleInputChange}>
                   
        <option>Lose Weight</option>
        <option>Maintain Weight</option>
        <option>Gain Weight</option>
      </Form.Select>
      </div>
      
      <button className='form-input-btn'  type='submit' onClick={handleFormSubmit}>Submit</button>
        </ListGroup.Item>
      </ListGroup>
    </Card>
    {errorMessage && (
                        <div>
                            <h2 className='error-text'><mark>{errorMessage} Broken</mark></h2>
                        </div>)}
    </div>
  )
}

export default Calculator

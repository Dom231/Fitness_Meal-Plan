import React from 'react'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './cal.css';

function Calculator() {
  return (
    <div>

    <Card className='card-info'   >
    <Card.Title style={{textAlign:'center'}}><h1> Calculate your Macros </h1></Card.Title>
       <div className='form-inputs'>
                        <label className='form-label'>Age</label>
                        <input  type='number' className='form-input' name='Age' placeholder='Enter your Age' />
                        <label className='form-label'>Height(Inches) </label>
                        <input type='number' className='form-input' name='Height' placeholder='Enter your height' />
                        <label className='form-label'>Weight(lbs)</label>
                        <input  type='number' className='form-input' name='Height' placeholder='Enter your Weight' />

                    <label className='form-label'>Activity Level</label>
                    <Form.Select className='form-inputs'>
        <option>Sedentary</option>
        <option>Light Activity</option>
        <option>Moderate Activity</option>
        <option>Very Active</option>
      </Form.Select>
      <label className='form-label'>Goal</label>
                    <Form.Select className='form-inputs'>
                   
        <option>Lose Weight</option>
        <option>Maintain Weight</option>
        <option>Gain Weight</option>
      </Form.Select>
      <button className='form-input-btn' type='submit'>Submit</button>
      </div>
      <div className='center' style={{textAlign:'center'}}><h2>Here is your Macros: </h2>
    <Row >
      <Col>Calorie</Col>
   <Col > Protein</Col>
    <Col> Carb</Col>
    <Col> Fat</Col>
 
    </Row>   </div>
   </Card>
    </div>
    
  )
}

export default Calculator

import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';

function Calculator() {
  return (
    <div>

    <Card style={{marginLeft:'50rem', marginRight:'50rem', marginTop:'1rem'}}>
    {/* <Card.Img  style={{imageResolution:'2rem'}} src={cal} /> */}
    <Card.Title style={{textAlign:'center'}}><h1> Calculate your Macros </h1></Card.Title>
  
      <ListGroup >
        <ListGroup.Item><div className='form-inputs'>
                        <label className='form-label'>Age</label>
                        <input type='number' className='form-input' name='Age' placeholder='Enter your Age' >
                        </input>
      
                        <label className='form-label'>Height </label>
                        <input type='number' className='form-input' name='Height' placeholder='Enter your height in Inches' >
                        </input>
                    
                        <label className='form-label'>Weight</label>
                        <input type='number' className='form-input' name='Height' placeholder='Enter your Weight in lbs' >
                        </input>
                  
                    <label className='form-label'>Activity Level</label>
                    <Form.Select style={{borderRadius:'2px', fontSize:'1.5rem'}}className='form-inputs'>
                   
        <option>Sedentary</option>
        <option>Light Activity</option>
        <option>Moderate Activity</option>
        <option>Very Active</option>
      </Form.Select>

      <label className='form-label'>Goal</label>
                    <Form.Select style={{borderRadius:'2px', fontSize:'1.5rem'}}className='form-inputs'>
                   
        <option>Lose Weight</option>
        <option>Maintain Weight</option>
        <option>Gain Weight</option>
      </Form.Select>
      </div>
      
      <button className='form-input-btn'  type='submit'>Submit</button>
        </ListGroup.Item>
      </ListGroup>
    </Card>
    </div>
  )
}

export default Calculator

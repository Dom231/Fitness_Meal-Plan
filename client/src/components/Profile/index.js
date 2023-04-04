import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import welcome from '../../images/welcome.jpg';
import money from '../../images/money.jpg';
import ListGroup from 'react-bootstrap/ListGroup';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';
import { render } from 'react-dom';

function Me() {
  useEffect(()=>{
    const reloadCount = sessionStorage.getItem('reloadCount');
    if(reloadCount < 1) {
      sessionStorage.setItem('reloadCount', String(reloadCount + 1));
      window.location.reload();
    } else {
      sessionStorage.removeItem('reloadCount');
    }
  },[]);
  const { loading, data } = useQuery(QUERY_ME);
  const profile = data?.me || {};
  useEffect(() => {
    console.log("profile", profile);
  },[data]);
  const [open, setOpen] = useState(false);


  const renderList = (obj) => {
    let list = [];
    const renderCard = (card, index) => {

            return (
        <tbody>
        <tr>
          <td><h1>{card.title}</h1></td>
          <td><Card style={{width: '30rem', alignItems:'center'}}  className='box'>
          <Card.Img variant='top'  src={card.breakfast.image} />
          </Card>
          <Card.Title><h3 >{card.breakfast.title}</h3></Card.Title></td>
          <td><Card style={{width: '30rem'}}  className='box'>
          <Card.Img variant='top'  src={card.lunch.image} />
          </Card>
          <Card.Title><h3 >{card.lunch.title}</h3></Card.Title></td>
          <td><Card style={{width: '30rem'}}  className='box'>
          <Card.Img variant='top'  src={card.dinner.image} />
          </Card>
          <Card.Title><h3 >{card.dinner.title}</h3></Card.Title></td>
        </tr>
        
      </tbody>
            );
};
console.log(obj);
for (const key in obj) {
    const element=obj[key];
    list.push(renderCard(element, element._id));
}
return list;
}
  return (
    <>
   
    <Card style={{border:'none'}}>
    <Card.Img  src={welcome} />
      <Card.Body style={{color:'white', backgroundColor:'black', padding:'1rem'}}>
      <Card.Title ><h1> Hello Welcome User!</h1></Card.Title>
      </Card.Body>
    </Card>

    <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        style={{padding:'2rem', marginTop: '3rem', marginLeft:'38%', borderRadius:'1rem',fontSize:'2rem'}}
      >
       Click Me to know you Macros
      </Button>
      <Collapse in={open}>
      <Card style={{marginLeft:'60rem', marginRight:'60rem',border:'none', backgroundColor:'whitesmoke', color:'black', borderRadius:'2rem'}}>
      <ListGroup >
      <div className="card-header d-flex" style={{padding:'2rem'}}>
    <h2>CALORIE GOAL</h2>
    <span className="ms-auto text-muted"><h1>{profile.calorie_goal}</h1></span>
  </div>
      <div className="card-header d-flex" style={{padding:'2rem'}}>
    <h2>PROTEIN GOAL</h2>
    <span className="ms-auto text-muted"><h1>{profile.protein_goal}</h1></span>
  </div>
      
  <div className="card-header d-flex" style={{padding:'2rem'}}>
  <h2>CARB GOAL</h2>
    <span className="ms-auto text-muted"><h1>{profile.carb_goal}</h1></span>
  </div>

  <div className="card-header d-flex" style={{padding:'2rem'}}>
  <h2>FAT GOAL</h2>
    <span className="ms-auto text-muted"><h1>{profile.fat_goal}</h1></span>
  </div>
      </ListGroup>
    </Card>
      </Collapse>

    

    <Card style={{border:'none', paddingTop:'2rem'}}>
    <Card.Body style={{color:'black', backgroundColor:'white', padding:'1rem'}}>
        <Card.Title><h1> Here is Your Meal Planner</h1></Card.Title>
      
      </Card.Body>
    </Card>

<Table striped bordered hover>
      <thead>
        <tr>
          <th></th>
          <th> <h1>Breakfast</h1>
          </th>
          <th><h1>Lunch</h1></th>
          <th><h1>Dinner</h1></th>
        </tr>
      </thead>
      {renderList(profile.day_plans)}
    </Table>

    </>
  );
}

export default Me;
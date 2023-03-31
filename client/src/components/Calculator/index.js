import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import cal from '../../images/cal.JPG';



function Calculator() {
  return (
    <div>

    <Card style={{marginLeft:'60rem', marginRight:'60rem'}}>
    <Card.Img  style={{imageResolution:'2rem'}} src={cal} />
    <Card.Title style={{textAlign:'center'}}><h1> Calculate your Macros </h1></Card.Title>
  
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>



    </div>
  )
}

export default Calculator

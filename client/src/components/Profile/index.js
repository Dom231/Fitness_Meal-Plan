
import Card from 'react-bootstrap/Card';
import welcome from '../../images/welcome.jpg';
import money from '../../images/money.jpg';
import ListGroup from 'react-bootstrap/ListGroup';
import Table from 'react-bootstrap/Table';

function Me() {
  

  return (
    <>
    <h2>Hello {}</h2>
    <Card className="text-center" style={{border:'none'}}>
    <Card.Img  src={welcome} />
      <Card.Body style={{color:'white', backgroundColor:'black', padding:'1rem'}}>
        <Card.Title><h1> Here is Your Macros</h1></Card.Title>
      </Card.Body>

      <Card.Body style={{color:'black', backgroundColor:'white', padding:'1rem'}}>
        <Card.Title><h1> CALORIE  :  1267</h1></Card.Title>
      </Card.Body>
      
    </Card>

    <Card style={{marginLeft:'60rem', marginRight:'60rem',border:'none', backgroundColor:'whitesmoke', color:'black'}}>
      <ListGroup >
      <div className="card-header d-flex" style={{padding:'2rem'}}>
    <h2>Protein</h2>
    <span className="ms-auto text-muted"><h1>48</h1></span>
  </div>
      
  <div className="card-header d-flex" style={{padding:'2rem'}}>
  <h2>Carb</h2>
    <span className="ms-auto text-muted"><h1>48</h1></span>
  </div>

  <div className="card-header d-flex" style={{padding:'2rem'}}>
  <h2>Fat</h2>
    <span className="ms-auto text-muted"><h1>48</h1></span>
  </div>
      </ListGroup>
    </Card>

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
      <tbody>
        <tr>
          <td><h1>Day 1</h1></td>
          <td><Card style={{width: '30rem', alignItems:'center'}}  className='box'>
          <Card.Img variant='top'  src={money} />
          </Card>
          <Card.Title><h3 >Egg Roll</h3></Card.Title></td>
          <td><Card style={{width: '30rem'}}  className='box'>
          <Card.Img variant='top'  src={money} />
          </Card>
          <Card.Title><h3 >Egg Roll</h3></Card.Title></td>
          <td><Card style={{width: '30rem'}}  className='box'>
          <Card.Img variant='top'  src={money} />
          </Card>
          <Card.Title><h3 >Egg Roll</h3></Card.Title></td>
        </tr>
        
      </tbody>
    </Table>

    </>
  );
}

export default Me;
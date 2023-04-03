
// import React, {useState} from 'react';
// import Nav from 'react-bootstrap/Nav';
// import BasicExample from './breakfast';
// import Lunch from './lunch';
// import Dinner from './dinner';

// function Tabs() {
//     const [toggleState, setToggleState] = useState(1);

//     const toggleTab = (index) => {
//         setToggleState(index);
//     };

//     return (
//         <>
// <Nav>
// <Nav justify variant="tabs" defaultActiveKey="/home" >
//       <Nav.Item style={{backgroundColor: 'gray'}}>
//         <Nav.Link className={toggleState === 1 ? "tabs active-tabs" : "tabs" }
//        onClick={() => toggleTab(1)} href="#" style={{padding:'2rem'}}><h3>Breakfast</h3></Nav.Link>
// <BasicExample />
//       </Nav.Item>
//       </Nav>

//       <Nav justify variant="tabs" defaultActiveKey="/home" >
//       <Nav.Item style={{backgroundColor: 'gray'}}>
//         <Nav.Link className={toggleState === 1 ? "tabs active-tabs" : "tabs" }
//        onClick={() => toggleTab(1)} href="#" style={{padding:'2rem'}} eventKey="link-1"><h3>Lunch</h3></Nav.Link>
//        <Lunch />
//       </Nav.Item>
//       </Nav>

//       <Nav justify variant="tabs" defaultActiveKey="/home" >
//       <Nav.Item style={{backgroundColor: 'gray'}}>
//         <Nav.Link className={toggleState === 1 ? "tabs active-tabs" : "tabs" }
//        onClick={() => toggleTab(1)} href="#" style={{padding:'2rem'}} eventKey="link-2"><h3>Dinner</h3></Nav.Link>
//        <Dinner />
//       </Nav.Item>
//       </Nav>
//       </Nav>
    
//      </>
//     )
//     }
//     export default Tabs;

import React from 'react';
import { Row, Tab} from 'react-bootstrap';
import './mealindex.css';
import Breakfast from './Breakfast';
import Lunch from './Lunch';
import Dinner from './Dinner';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';





const BTabs = () => {
  const {loading, data} = useQuery(
    QUERY_ME
  )

  if (loading) {
    return <div>Loading...</div>;
  }
  if (data.me.calorie_goal === null) {
    return (
      <h1>
        Please use the fitness goal calculator to see meals! <a href="/calculator">Calculator</a>
      </h1>
    );
  }


  return (
    < >
      {/* <Row className='tabs'>
        <Tabs justify variant='pills'  className=' p-0'>
<Tab eventKey= 'tab-1' title='Breakfast'>
<Breakfast />
      
</Tab>

<Tab eventKey= 'tab-2' variant='pills' className=' p-0' title='Lunch'>
 <Lunch />
</Tab>

<Tab eventKey= 'tab-3' title='Dinner'>
  <Dinner />
</Tab>
        </Tabs>
      </Row> */}

<Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">Breakfast</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Lunch</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">Dinner</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <Breakfast />
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <Lunch />
            </Tab.Pane>
            <Tab.Pane eventKey="third">
              <Dinner />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
      

    </>
  )
};

export default BTabs;
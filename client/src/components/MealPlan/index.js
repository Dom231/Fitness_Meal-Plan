
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
import { Row, Tabs, Tab} from 'react-bootstrap';
import './mealindex.css';
import Breakfast from './Breakfast';
import Lunch from './Lunch';
import Dinner from './Dinner';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';


const BTabs = () => {
  const {loading, data} = useQuery(
    QUERY_ME
  )

  if (loading) {
    return <div>Loading...</div>;
  }
  // if (!data?.calorie_goal) {
  //   return (
  //     <h1>
  //       Please use the fitness goal calculator to see meals! <a href="/calculator">Calculator</a>
  //     </h1>
  //   );
  // }
  return (
    < >
      <Row className='tabs'>
        <Tabs justify variant='pills' defaultActiveKey='tab-1' className='mb-1 p-0'>
<Tab eventKey= 'tab-1' title='Breakfast'>
<Breakfast />
      
</Tab>

<Tab eventKey= 'tab-2' title='Lunch'>
 <Lunch />
</Tab>

<Tab eventKey= 'tab-3' title='Dinner'>
  <Dinner />
</Tab>
        </Tabs>
      </Row>

    </>
  )
};

export default BTabs;
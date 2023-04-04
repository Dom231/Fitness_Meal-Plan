
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
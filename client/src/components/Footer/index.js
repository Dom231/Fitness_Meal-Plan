import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';

const Footer = () => {
  return (
    <footer style={{backgroundColor: 'black'}}>
      <Container style={{height: '6rem', fontSize: 30, color: 'white'}}>
        <Row>
          <Col className='text-center '>
          Copyright &copy; Fitness meal planner</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
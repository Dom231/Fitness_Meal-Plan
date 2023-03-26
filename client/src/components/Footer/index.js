import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';

const Footer = () => {
  return (
    <footer style={{backgroundColor: 'black'}}>
      <Container style={{minHeight: 60, fontSize: 30, color: 'white'}}>
        <Row>
          <Col className='text-center py-3'>
          Copyright &copy; Fitness meal planner</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
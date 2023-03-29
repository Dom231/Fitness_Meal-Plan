
import React, {useState} from 'react';
import Nav from 'react-bootstrap/Nav';

function Tabs() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <>

<Nav justify variant="tabs" defaultActiveKey="/home" >
      <Nav.Item style={{backgroundColor: 'gray'}}>
        <Nav.Link className={toggleState === 1 ? "tabs active-tabs" : "tabs" }
       onClick={() => toggleTab(1)} href="#" style={{padding:'2rem'}}><h3>Breakfast</h3></Nav.Link>
      </Nav.Item>
      <Nav.Item style={{backgroundColor: 'gray'}}>
        <Nav.Link className={toggleState === 1 ? "tabs active-tabs" : "tabs" }
       onClick={() => toggleTab(1)} href="#" style={{padding:'2rem'}} eventKey="link-1"><h3>Lunch</h3></Nav.Link>
      </Nav.Item>
      <Nav.Item style={{backgroundColor: 'gray'}}>
        <Nav.Link className={toggleState === 1 ? "tabs active-tabs" : "tabs" }
       onClick={() => toggleTab(1)} href="#" style={{padding:'2rem'}} eventKey="link-2"><h3>Dinner</h3></Nav.Link>
      </Nav.Item>
    
    </Nav>
     </>
    )
    }
    export default Tabs;

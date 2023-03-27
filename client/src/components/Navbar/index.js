import React from 'react';
import { Nav, NavLink, Bars, NavMenu} from './IndexElement';

const Navbar = () => {
  return (
    <>
   <Nav>
   
    <NavLink to='/'>
       <h1 style={{color: 'white'}}>Fitness Meal Planner</h1>
    </NavLink>
    <Bars />
    <NavMenu>
        <NavLink to="/home" activeStyle> 
            Home 
        </NavLink>
        <NavLink to="/meallist" activeStyle>
            Meal Plan
        </NavLink>
        <NavLink to="/me" activeStyle>
            Profile
        </NavLink>
        <NavLink to="/signup" activeStyle>
            Sign Up
        </NavLink>
        <NavLink to="/aboutus" activeStyle>
           About Us
        </NavLink>
       
    </NavMenu>
   
   </Nav>
    </>
  )
}

export default Navbar;

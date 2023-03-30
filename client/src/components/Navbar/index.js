import React, {useState} from 'react';


import { FaBars, FaTimes } from 'react-icons/fa';
import {IconContext } from 'react-icons/lib';
import { Nav,NavbarContainer ,NavLogo, HamburgerIcon, NavMenu, NavItem, NavLink } from './IndexElement';
// import {Button} from '../../globalStyles';


const Navbar = () => {

const [click, setClick] = useState(false);

const handleClick = () => setClick(!click);

  return (
    <>
    <IconContext.Provider value={{color: '#fff'}}>

   
      <Nav>
<NavbarContainer >
  <NavLogo to='/'>
    Fitness Meal Planner
  </NavLogo>
  <HamburgerIcon onClick={handleClick}>
    {click ? <FaTimes /> : <FaBars />}
  </HamburgerIcon>
  </NavbarContainer>

<NavMenu onClick={handleClick} click={click}>
  <NavItem>
    <NavLink to='/' >
      Home
    </NavLink>
  </NavItem>



  <NavItem>
    <NavLink to='/meallist' >
      Meal Plan
    </NavLink>
  </NavItem>



  <NavItem>
    <NavLink to='/me' >
      Profile
    </NavLink>
  </NavItem>



  <NavItem>
    <NavLink to='/login' >
    Login
    </NavLink>
  </NavItem>



  <NavItem>
    <NavLink to='/aboutus' >
      About Us
    </NavLink>
  </NavItem>



  <NavItem>
    <NavLink to='/calculator' >
      Calculator
    </NavLink>
  </NavItem>
  {/* <NavItemButton>
      <Button>SIGN UP</Button>
    
  </NavItemButton> */}
</NavMenu>

      </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar

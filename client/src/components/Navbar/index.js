import React from 'react';
import { FaBars } from 'react-icons/fa';

import { Nav, NavbarContainer, NavLogo, NavMenu, NavItem, NavLink, HamburgerIcon, NavBtn, NavBtnLink } from './indexElement';

import '../../bootstrap.min.css';

const Navbar = ({ toggle }) => {


  return (
    <>

      <Nav>
        <NavbarContainer >
          <NavLogo to='/'>
            Fitness Meal Planner
          </NavLogo>

          <HamburgerIcon onClick={toggle}>
            <FaBars />
          </HamburgerIcon>

          <NavMenu >
            <NavItem>
              <NavLink to='/' >
                Home
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink to="/meallist" >
                Meal Plan
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink to='/me' >
                Profile
              </NavLink>
            </NavItem>



            <NavItem>
              <NavLink to='/aboutus' >
                About Us
              </NavLink>
            </NavItem>

          </NavMenu>
        </NavbarContainer>
        <NavBtn className="mr-left">
          <NavBtnLink to='/login'>Sign In</NavBtnLink>
        </NavBtn>

      </Nav>

    </>
  )
}

export default Navbar


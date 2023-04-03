import React, {useState}from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
// import {IconContext } from 'react-icons/lib';
import { Nav,NavbarContainer ,NavLogo, NavMenu, NavItem, NavLink,HamburgerIcon, NavBtn, NavBtnLink } from './indexElement';
// import {Button} from '../../globalStyles';

const Navbar = () => {

 const [click, setClick] = useState(false);

 const handleClick = () => setClick(!click);
  return (
    <>
   
      <Nav>
<NavbarContainer >
  <NavLogo to='/'>
    Fitness Meal Planner
  </NavLogo>

  <HamburgerIcon onClick={handleClick}>
    {click ? <FaTimes /> : <FaBars />}
  </HamburgerIcon>
  <NavMenu >
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

</NavMenu>
<NavBtn>
  <NavBtnLink to='/login'>Sign In</NavBtnLink>
</NavBtn>
  </NavbarContainer>
      </Nav>
    
    </>
  )
}

export default Navbar

// import React from 'react'
// import { FaBars, FaTimes } from 'react-icons/fa';
// import { useRef } from 'react';
// import './navbar.css';
// import { Link } from 'react-router-dom';

// function Navbar() {

// const navRef = useRef();

// const showNavbar = () => {
//   navRef.current.classList.toggle("responsive_nav");
// }



//   return (
//     <div>
//       <header>
//         <h1 ><Link className='title' to='/'>Fitness Meal Planner</Link></h1>
//         <nav  ref={navRef}>
//           <Link to="/">Home</Link>
//           <Link to="/meallist">Meal Plan</Link>
//           <Link to="/me">Profile</Link>
//           <Link to="/login">Login</Link>
//           <Link to="/aboutus">About Us</Link>

//           <button className="nav-btn nav-close-btn" onClick={showNavbar}>
// <FaTimes />

//           </button>
//         </nav>
//         <button className="nav-btn" onClick={showNavbar}> 
//           <FaBars />
//         </button>
//       </header>

      
//     </div>
//   )
// }

// export default Navbar;

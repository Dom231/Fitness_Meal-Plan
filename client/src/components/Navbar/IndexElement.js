import styled from 'styled-components';
// import { FaMagento} from 'react-icons/fa';
import {Link} from 'react-router-dom';

import { Container } from'../../globalStyles';


export const Nav = styled.nav`
background-color: black;
height: 150px;
display:flex;
justify-content: space-between;
align-items: center;
font-size: 2rem;
position: sticky;
top: 0;
z-index: 999;
`;

export const NavbarContainer = styled(Container)`
display:flex;
justify-content: space-between;
height: 80px;

${Container}
`;

export const NavLogo = styled(Link)`
color: #fff;
justify-self: flex-start;
cursor: pointer;
text-decoration: none;
font-size: 3rem;
display: flex;
align-items: center;
&:hover {
   
    transition: all 0.3s ease-out;
    
}
    
`


export const HamburgerIcon = styled.div`
display: none;


@media screen and (max-width: 1000px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 0.5rem;
    cursor: pointer;
}`;

export const NavMenu = styled.ul`
display:flex;
align-items:center;
list-style: none;
text-align: center;

@media screen and (max-width:960px){
    display:flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;

    top: 80px;
//show the hamburger true or false
    right:${({click} ) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #101522;

}
`
export const NavItem = styled.li`
height: 80px;
border-bottom: 2px  transparent;

&:hover {
    border-bottom: 2px ;
   
    transition: all 0.3s ease-out;
    background: #fff;

}

@media screen and (max-width: 960px){
    width: 100%;

   &:hover {
        border: none;
    }
}
`

export const NavLink = styled(Link)`
color: #fff;
display: flex;
align-items: center;
padding: 0.5rem 1rem;
text-decoration: none;
height: 100%;

@media screen and (max-width:960px){

    padding: 2rem;
    text-align: center;
    width:100%;
    display: table;

    &:hover {
        color: #4459f7;
        transition: all 0.3s ease;
    }
    
}
`

export const NavItemButton = styled.li`
@media screen and(max-width: 960px){
    display:flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 120px;
}`



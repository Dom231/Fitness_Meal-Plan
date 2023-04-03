import styled from 'styled-components';
// import { FaMagento} from 'react-icons/fa';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll'

// import { Container } from'../../globalStyles';


export const Nav = styled.nav`
background-color: black;
height: 150px;
/* margin-top: -80px; */
display:flex;
justify-content: center;
align-items: center;
font-size: 2rem;
position: sticky;
top: 0;
z-index: 10;

@media screen and (max-width:960px) {
    transition: 0.8s all ease;
}
`

export const NavbarContainer = styled.div`
display:flex;
justify-content: space-between;
height: 120px;
z-index: 1;
width: 100%;
padding: 0 24px;
max-width: 1100px;
`

export const NavLogo = styled(LinkR)`
color: #fff;
justify-self: flex-start;
cursor: pointer;
text-decoration: none;
font-size: 2rem;
display: flex;
align-items: center;
margin-left: 24px;
font-weight: bold;

    
`


export const HamburgerIcon = styled.div`
display: none;


@media screen and (max-width: 768px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
}`

export const NavMenu = styled.ul`
display:flex;
align-items:center;
list-style: none;
text-align: center;
margin-right: -22px;

@media screen and (max-width:768px){
    display:none;


} 
`
export const NavItem = styled.li`
height: 80px;
/* border-bottom: 2px  transparent; */
/* 
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
} */
`

export const NavLink = styled(LinkS)`
color: #fff;
display: flex;
align-items: center;
padding: 0.5rem 1rem;
text-decoration: none;
height: 100%;

&.active{
    border-bottom: 3px solid #01bf71;
}

`
export const NavBtn = styled.nav`
display:flex;
align-items: center;

@media screen and (max-width: 768px){
    display:none;
}`


export const NavBtnLink = styled(LinkR)`
border-radius: 50px;
background: #fff;
white-space: nowrap;
padding: 10px 22px;
color: #000;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover{
    transition: all 0.2s ease-in-out;
    background:#000;
    color: #fff;
}`


export const NavItemButton = styled.li`
@media screen and(max-width: 960px){
    display:flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 120px;
}`


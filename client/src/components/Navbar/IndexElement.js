import styled from 'styled-components';
import { NavLink as Link} from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

export const Nav = styled.nav`
background: #000;
height: 150px;
display: flex;
justify-content: space-between;
padding: 3rem;
z-index: 10;
font-size: 2rem;
white-space: nowrap;
position: sticky;
top:0;

@media screen and (max-width: 960px){
    transition: 0.8s all ease;
}
`
// export const NavbarContainer = styled.div`
// display:flex;
// justify-content: space-between;
// height: 80px;
// z-index: 1;
// width: 100%;
// padding: 0 15px;
// max-width: 1100px;`

export const NavLink = styled(Link)`
color: #fff;
display:flex;

text-decoration: none;
padding: 0 2rem;
height: 100%;
cursor: pointer;

&.active {
    color: #eeeee4;
}`
// Hamburger Icon
export const Bars = styled(FaBars)`
display: none;


@media screen and (max-width: 950px) {
    display: block;
    position: absoulte;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 2.5rem;
    cursor: pointer;
    color: #fff;
   

}`

export const NavMenu = styled.div`
display: flex;

margin-right: -1rem;
font-size: 2rem;
white-space: nowrap;

@media screen and (max-width: 1000px){
    display:none;
    
}`


//navbtn will be here if we use login link
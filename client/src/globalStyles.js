import styled, {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    
}`

export const Container = styled.div`
z-index:1;
width: 100%;
max-width:1300px;
margin-right: auto;
margin-left: auto;
padding-right:50px;
padding-left: 50px;

@media screen and (max-width: 991px){
    padding-right: 30px;
    padding-left: 30px;
}`

export const Button = styled.button `
border-radius:4px;
background-color: gray;
white-space: nowrap;
outline:none;
border:none;
cursor: pointer;


&:hover {
    transition: all 0.3s ease-out;
    background: #fff;
}

@media screen and (max-width: 960px){
    width: 100%;
}`
export default GlobalStyle;
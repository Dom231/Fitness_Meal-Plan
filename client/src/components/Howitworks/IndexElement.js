import styled from 'styled-components';

export const WorkContainer = styled.div`
height: 1000px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #000;

/* @media screen and (max-width: 1000px) {
    height: 80vh;
   
} */


`

export const WorkWrapper = styled.div`
max-width: 3000px;

margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
grid-gap: 16px;
padding: 0 30px;

@media screen and (max-width: 960px){
    grid-template-columns: 1fr ;
    
}
`

export const WorkCard = styled.div`

background: #fff;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border-radius: 15px;
max-height: 740px;
padding: 70px;
box-shadow: 0 1px 3px rgba(0,0,0,0.2);
transition: all 0.2s ease-in-out;

&:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    @media (max-width: 960px){

    }
}
`

export const WorkIcon = styled.img`
height: 500px;
width: 500px;
margin-bottom: 10px;

@media screen and (max-width: 1100px){
    height: 100px;
width: auto;
}

`

export const WorkH1 = styled.h1`
font-size: 5vh;
color:#fff;
margin-bottom: 2vh;

@media screen and (max-width: 960px){
    font-size: 2rem;
}
`

export const WorkH2 = styled.h2`
font-size: 2rem;

`

export const WorkP = styled.p`
font-size: 2rem;
text-align: center;

@media (max-width:960px){
    display: none;
}

`
export const Carousel = styled.div`
 width:900px;
  height:500px;
  margin: auto;
  backgroundColor:black;
`
import styled from 'styled-components';

export const WorkContainer = styled.div`
height: 1000px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #000;

@media screen and (max-width: 900px) {
    height: 2100px;
}

@media screen and (max-width: 480px) {
    height: 1300px;
}
`

export const WorkWrapper = styled.div`
max-width: 3000px;

margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
grid-gap: 16px;
padding: 0 30px;

@media screen and (max-width: 1000px){
    grid-template-columns: 1fr 1fr;
}

@media screen and (max-width: 768px){
    grid-template-columns: 1fr;
    padding: 0 20px;
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
padding: 40px;
box-shadow: 0 1px 3px rgba(0,0,0,0.2);
transition: all 0.2s ease-in-out;

&:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;

}
`

export const WorkIcon = styled.img`
height: 500px;
width: 500px;
margin-bottom: 10px;

@media screen and (max-width: 375px){
    height: 100px;
width: 100px;
}

`

export const WorkH1 = styled.h1`
font-size: 5rem;
color:#fff;
margin-bottom: 64px;

@media screen and (max-width: 375px){
    font-size: 0.5rem;
}
`

export const WorkH2 = styled.h2`
font-size: 2rem;
margin-bottom: 10px;

}`

export const WorkP = styled.p`
font-size: 2rem;
text-align: center;

`
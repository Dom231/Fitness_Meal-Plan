import React from 'react';
import calculate from '../../images/calculate.png';
import healthy from '../../images/healthy.png';
import mealplan from '../../images/mealplan.png';
import {WorkContainer, WorkCard, WorkH1, WorkH2, WorkIcon, WorkP, WorkWrapper } from './IndexElement';

const Howitworks = () => {
  return (
    <WorkContainer>
      <WorkH1>
        How it Works
      </WorkH1>
      <WorkWrapper>

        <WorkCard>
            <WorkIcon src={calculate}/>
            <WorkH2>Calculate Macros</WorkH2>
            <WorkP>Calculate your macros. </WorkP>
        </WorkCard>

        <WorkCard>
            <WorkIcon src={mealplan}/>
            <WorkH2>Pick your meal</WorkH2>
            <WorkP>Pick your favorite meal. </WorkP>
        </WorkCard>

        <WorkCard>
            <WorkIcon src={healthy}/>
            <WorkH2>Eat healthy</WorkH2>
            <WorkP>Enjoy your healthy eating. </WorkP>
        </WorkCard>

      </WorkWrapper>
    </WorkContainer>
  )
}

export default Howitworks;

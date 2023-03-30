import React from 'react'
import CalculatorForm from '../components/Calculator';
// import Calculator from '../components/Calculator';

function Cal_calc() {
  return (
<>
<h1>Sample Calculator</h1>
<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh'}}>

<CalculatorForm />
 </div>
 </>
  )
}

export default Cal_calc;
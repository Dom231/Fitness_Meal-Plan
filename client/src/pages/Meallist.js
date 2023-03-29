import React from 'react'
import Footer from '../components/Footer';
import MealPlan from '../components/MealPlan';

function Meallist() {
  return (
    <div style={{ justifyContent: 'center', alignItems: 'center', height: '90vh', fontSize:'8rem'}}>
      
      <MealPlan />
      <Footer />
    </div>
  )
}

export default Meallist;
import React, { useEffect } from 'react'
import Footer from '../components/Footer';
import MealPlan from '../components/MealPlan';
import Auth from '../utils/auth'
import { useMutation, useQuery } from '@apollo/client';
import { useState } from 'react';
import { useMealContext } from '../utils/MealContext';
import { QUERY_ME } from '../utils/queries';


function Meallist() {
  const {goals, currentGoalNeeds, unsavedCalcInfo, addGoals, addCurrentGoalNeeds, addUnsavedCalcInfo} = useMealContext();
  const { loading, data } = useQuery(QUERY_ME);
  const profile = data?.me || {};

  useEffect(()=>{
    if (profile != {}) {
        addGoals({
          calories: profile.calorie_goal,
          protein: profile.protein_goal,
          carbs: profile.carb_goal,
          fat: profile.fat_goal
        });
      }
  }, [data])
  
  const token = Auth.loggedIn();
  if (token) {
    return (
    <>
    <div style={{height: 'auto'}}>
      
      <MealPlan />
     
    </div>
    </>
  )
}}

export default Meallist;
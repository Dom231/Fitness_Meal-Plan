import React, { createContext, useContext } from 'react';

const MealContext = createContext();

export const MealProvider = ({children}) => {
    const goals = {
        calories: 2000,
        protein: 200,
        carbs: 250,
        fat: 23
    }

    const currentGoalNeeds = {
        calories: 2000,
        protein: 200,
        carbs: 250,
        fat: 23
    }

    const unsavedCalcInfo = {
        weight: null,
        age: null, 
        height: null,
        activityLevel: null,
        loseMaintainGain: null,
        calories: null,
        protein: null,
        carbs: null,
        fat: null
    }

    return (
        <MealContext.Provider
            value={{goals, currentGoalNeeds, unsavedCalcInfo}} >
                {children}
        </MealContext.Provider>
    )
}
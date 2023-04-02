import React, { createContext, useContext, useState } from 'react';

const MealContext = createContext();

export const useMealContext = () => useContext(MealContext);

export const MealProvider = ({children}) => {
    const [goals, setGoals] = useState({
        calories: 2000,
        protein: 200,
        carbs: 250,
        fat: 23
    });

    const [currentGoalNeeds, setCurrentGoalNeeds] = useState({
        calories: 2000,
        protein: 200,
        carbs: 250,
        fat: 23
    });

    const [unsavedCalcInfo, setUnsavedCalcInfo] = useState({
        weight: null,
        age: null, 
        height: null,
        activityLevel: null,
        loseMaintainGain: null,
        calories: null,
        protein: null,
        carbs: null,
        fat: null
    });

    const addGoals = (goalObj) => {
        setGoals({
            calories: goalObj.calories,
            protein: goalObj.protein,
            carbs: goalObj.carbs,
            fat: goalObj.fat
        });
    }

    const addCurrentGoalNeeds = (needsObj) => {
        setCurrentGoalNeeds({
            calories: needsObj.calories,
            protein: needsObj.protein,
            carbs: needsObj.carbs,
            fat: needsObj.fat
        })
    }

    const addUnsavedCalcInfo = (unsavedObj) => {
        setUnsavedCalcInfo({
            weight: unsavedObj.weight,
            age: unsavedObj.age, 
            height: unsavedObj.height,
            activityLevel: unsavedObj.activityLevel,
            loseMaintainGain: unsavedObj.loseMaintainGain,
            calories: unsavedObj.calories,
            protein: unsavedObj.protein,
            carbs: unsavedObj.carbs,
            fat: unsavedObj.fat
        })
    }
    return (
        <MealContext.Provider
            value={{goals, currentGoalNeeds, unsavedCalcInfo, addGoals, addCurrentGoalNeeds, addUnsavedCalcInfo}} >
                {children}
        </MealContext.Provider>
    )
}
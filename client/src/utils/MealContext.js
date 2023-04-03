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

    const [lunchGoalNeeds, setLunchGoalNeeds] = useState({
        calories: 2000,
        protein: 200,
        carbs: 250,
        fat: 23
    });
    const [dinnerGoalNeeds, setDinnerGoalNeeds] = useState({
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

    const [workingBreakfast, setBreakfast] = useState(
        {
            id: null,
            title: null,
            calories: null,
            fat: null,
            protein: null,
            carbs: null,
            image: null
        },
    );

    const [workingLunch, setLunch] = useState(
        {
            id: null,
            title: null,
            calories: null,
            fat: null,
            protein: null,
            carbs: null,
            image: null
        }
    )

    const [workingDinner, setDinner] = useState(
        {
            id: null,
            title: null,
            calories: null,
            fat: null,
            protein: null,
            carbs: null,
            image: null
        }
    )

    const addBreakfast = (i) => {
        setBreakfast(
            {
                id: i.id,
                title: i.title,
                calories: i.calories,
                fat: i.fat,
                protein: i.protein,
                carbs: i.carbs,
                image: i.image
            },
        
        )
    }

    const addLunch = (i) => {
        setLunch(
            {
                id: i.id,
                title: i.title,
                calories: i.calories,
                fat: i.fat,
                protein: i.protein,
                carbs: i.carbs,
                image: i.image
            },
        
        )
    }

    const addDinner = (i) => {
        setDinner(
            {
                id: i.id,
                title: i.title,
                calories: i.calories,
                fat: i.fat,
                protein: i.protein,
                carbs: i.carbs,
                image: i.image
            },
        
        )
    }

    const addGoals = (goalObj) => {
        setGoals({
            calories: goalObj.calories,
            protein: goalObj.protein,
            carbs: goalObj.carbs,
            fat: goalObj.fat
        });
    }

    const addLunchGoalNeeds = (needsObj) => {
        setLunchGoalNeeds({
            calories: needsObj.calories,
            protein: needsObj.protein,
            carbs: needsObj.carbs,
            fat: needsObj.fat
        })
    }

    const addDinnerGoalNeeds = (needsObj) => {
        setDinnerGoalNeeds({
            calories: needsObj.calories,
            protein: needsObj.protein,
            carbs: needsObj.carbs,
            fat: needsObj.fat
        })
    }

    const addUnsavedCalcInfo = (unsavedObj) => {
        setUnsavedCalcInfo(unsavedObj)
    }
    return (
        <MealContext.Provider
            value={{goals, lunchGoalNeeds, dinnerGoalNeeds, unsavedCalcInfo, workingBreakfast, workingLunch, workingDinner, addGoals, addLunchGoalNeeds, addDinnerGoalNeeds, addUnsavedCalcInfo, addBreakfast, addLunch, addDinner}} >
                {children}
        </MealContext.Provider>
    )
}
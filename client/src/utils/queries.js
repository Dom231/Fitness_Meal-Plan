import { gql } from '@apollo/client';

export const QUERY_MEALS = gql`
    query allMeals {
        meals {
            title
            protein
            image
            fat
            carbs
            calories
            id
        }
    }
`

export const QUERY_ME = gql`
    query meProfile {
        me {
            _id
            username
            calorie_goal
            body_weight
            height
            age
            activityLevel
            loseMaintainGain
            protein_goal
            carb_goal
            fat_goal
        }
    }
`

export const QUERY_MEALS_FILTERED = gql`
    query MealsFiltered($calories: Int, $protein: Int, $carbs: Int, $fat: Int) {
        mealsFiltered(calories: $calories, protein: $protein, carbs: $carbs, fat: $fat) {
            title
            protein
            image
            id
            fat
            carbs
            calories
        }
    }
`
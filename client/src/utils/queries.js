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
            api_id
        }
    }
`

export const QUERY_ME = gql`
    query meProfile {
        me {
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
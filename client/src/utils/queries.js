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
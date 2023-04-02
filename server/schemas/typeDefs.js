const { gql } = require('apollo-server-express');

const typeDefs = gql `



type Meal {
    _id: ID
    api_id: String
    title: String
    calories: Int
    fat: Int
    protein: Int
    carbs: Int
    image: String

}

type DayMealPlan {
    _id: ID
    tile: String
    breakfast: Meal
    lunch: Meal 
    dinner: Meal 
}


type Profile {
    _id: ID
    username: String
    password: String
    email: String
    calorie_goal: Int
    body_weight: Int
    height: Int
    age: Int
    activityLevel: String
    loseMaintainGain: String
    protein_goal: Int
    carb_goal: Int
    fat_goal: Int
    allergies: [String]
    saved_meals: [ Meal]
    day_plans: [ DayMealPlan]
}



type Auth {
    token: ID!
    user : Profile
}

type Query{ 
    me : Profile
    meals: [Meal]
    meal(_id: String!): [Meal]
    mealsFiltered(calories: Int, protein: Int, carbs: Int, fat: Int): [Meal]

}

type Mutation {
    login(email: String!, password: String!): Auth
    addProfile(username: String!, email: String!, password: String!): Auth

    addDayPlan(title: String!, breakfast: MealInput!, lunch: MealInput!, Dinner: MealInput!): Profile

    addMeal(title: String!, calories: Int!, fat: Int!, protein: Int!, carbs: Int!, image: String! ):Profile
    removeDayPlan(_id: ID!):Profile
    removeMeal(api_id: Int!):Profile
    
}

 input MealInput {
    _id: ID
    api_id: String
    title: String
    calories: Int
    fat: Int
    protein: Int
    carbs: Int
    image: String


 }

`
module.exports = typeDefs;


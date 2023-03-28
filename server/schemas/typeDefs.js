const { gql } = require('apollo-server-express');

const typeDefs = gql `



type Meal {
    _id: ID
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
    email: String
    calorie_goal: Int
    body_weight: Int
    height: Int
    protein_goal: Int
    carb_goal: Int
    fat_goal: Int
    allergies: [String]
    saved_meals: [ Meal]
    day_plans: [ DayMealPlan]
}



type Auth {
    token: String
    user : Profile
}

type Query{ 
    me : Profile
}

type Mutation {
    login(email: String!, password: String): Auth
    addProfile(username: String!, email: String!, password: String!): Auth
}

`
module.exports = typeDefs;
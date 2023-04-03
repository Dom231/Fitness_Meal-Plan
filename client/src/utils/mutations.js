import { gql } from '@apollo/client';

export const ADD_PROFILE = gql`
  mutation addProfile($username: String!, $email: String!, $password: String!) {
    addProfile(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation update($_id: ID!, $calorie_goal: Int, $body_weight: Int, $height: Int, $age: Int, $activityLevel: String, $loseMaintainGain: String, $protein_goal: Int, $carb_goal: Int, $fat_goal: Int) {
    updateProfile(_id: $_id, calorie_goal: $calorie_goal, body_weight: $body_weight, height: $height, age: $age, activityLevel: $activityLevel, loseMaintainGain: $loseMaintainGain, protein_goal: $protein_goal, carb_goal: $carb_goal, fat_goal: $fat_goal){
      _id
      username
      age
      calorie_goal
      protein_goal
      carb_goal
      fat_goal
    }
  }
`
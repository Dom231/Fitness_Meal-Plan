const db = require('../config/connection');
const { Profile, Meal, DayMealPlan } = require('../models');
const profileSeeds = require('./profileSeeds.json');
require('dotenv').config()

const spoonBaseUrl = "https://api.spoonacular.com/recipes/complexSearch?addRecipeNutrition=true&addRecipeInformation=false&number=100"
const spoonKey = process.env.SPOON_API_KEY

db.once('open', async () => {
    
    try {
      await Profile.deleteMany({});
      await Profile.create(profileSeeds);
    
    
      const getMeals = async () => await fetch(spoonBaseUrl+"apiKey="+spoonKey)
      .then((res) => res.json())
      .then((data) => data);

      await Meal.deleteMany({});
      await getMeals().then((response) => response.forEach(async (item) => await Meal.create({
        api_id: item.id,
        title: item.title,
        calories: item.calories,
        fat: item.fat.slice(0,-1),
        protein: item.protein.slice(0,-1),
        carbs: item.carbs.slice(0,-1),
        image: item.image
      })));

      console.log('all done!');
      process.exit(0);
    } catch (err) {
      throw err;
    }
  });
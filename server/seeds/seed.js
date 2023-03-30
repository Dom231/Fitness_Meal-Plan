const db = require('../config/connection');
const { Profile, Meal, DayMealPlan } = require('../models');
const profileSeeds = require('./profileSeeds.json');
require('dotenv').config()

const spoonBaseUrl = "https://api.spoonacular.com/recipes/findByNutrients?minCarbs=1&number=5"
const spoonKey = process.env.SPOON_API_KEY

db.once('open', async () => {
    
    try {
      await Profile.deleteMany({});
      await Profile.create(profileSeeds);
    
    
      const getMeals = async () => await fetch(spoonBaseUrl+"&apiKey="+spoonKey)
      .then((res) => res.json())
      .then((data) => data);

      let mealList = []
      await Meal.deleteMany({});
      await getMeals().then(async (response) => {
        //console.log(response)
        
        for (const key in response) {
          const element = response[key];
          element.protein=parseInt(element.protein.slice(0,-1));
          element.fat=parseInt(element.fat.slice(0,-1));
          element.carbs=parseInt(element.carbs.slice(0,-1));
          mealList.push(element);
        }
        })

      await Meal.create(mealList);
      console.log('all done!');
      process.exit(0);
    } catch (err) {
      throw err;
    }
  });
const db = require('../config/connection');
const { Profile, Meal, DayMealPlan } = require('../models');
const profileSeeds = require('./profileSeeds.json');
require('dotenv').config()

const spoonBaseUrl = "https://api.spoonacular.com/recipes/findByNutrients?minCarbs=1&number=100"
const spoonKey = process.env.SPOON_API_KEY
db.once('open', async () => {
    
    try {
      await Profile.deleteMany({});
      await Profile.create(profileSeeds);
    
      await Meal.deleteMany({});
      const getMeals = async (offset) => await fetch(spoonBaseUrl+"&apiKey="+spoonKey+"&offset="+offset)
      .then((res) => res.json())
      .then((data) => data);

      for (let i =0; i <10; i++){
        let mealList = []
      
        await getMeals((i*100)+1).then(async (response) => {
          //console.log(response)
          
          for (const key in response) {
            const element = response[key];
            element.protein=parseInt(element.protein.slice(0,-1));
            element.fat=parseInt(element.fat.slice(0,-1));
            element.carbs=parseInt(element.carbs.slice(0,-1));
            mealList.push(element);
          }
          })
          console.log(mealList[0]);
        await Meal.create(mealList); 
        console.log(i)    
      }
      
      console.log('all done!');
      process.exit(0);
    } catch (err) {
      throw err;
    }
  });
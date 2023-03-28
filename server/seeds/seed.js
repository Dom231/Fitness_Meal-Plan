const db = require('../config/connection');
const { Profile, Meal, DayMealPlan } = require('../models');
const profileSeeds = require('./profileSeeds.json');

db.once('open', async () => {
    try {
      await Profile.deleteMany({});
      await Profile.create(profileSeeds);
    
      const mealList = await fetch
      await Meal.deleteMany({});
      await Meal.create()

      console.log('all done!');
      process.exit(0);
    } catch (err) {
      throw err;
    }
  });
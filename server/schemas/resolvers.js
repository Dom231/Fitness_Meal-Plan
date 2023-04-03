const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');




const {Profile, Meal, DayMealPlan } = require('../models')


const  resolvers = {
    Query : {
        me: async (parent, args, context) => {
            if (context.user) {
              const userData = await Profile.findOne({ _id: context.user._id });
              return userData;
            }
            throw new AuthenticationError('You need to be logged in!');
          },
          meals: async (parent, args) => {
            return Meal.find({})
          }, 
          meal: async (parent, {_id}) => {
            const params = _id ? {_id} : {};
            return Meal.find(params)
          },
          mealsFiltered: async (parent, {calories, protein, carbs, fat}) => {
            return Meal.find({calories: {$gt: calories-200,
                                         $lt: calories+200},
                              protein: {$gt: protein-20,
                                        $lt: protein+20},
                              carbs: {$gt: carbs-20,
                                      $lt: carbs+20},
                              fat: {$gt: fat-20,
                                    $lt: fat+20}
            });
          },



        
    }, 

    Mutation: {
        addProfile: async (parent, args) => {
        const user = await Profile.create(args);
        const token = signToken(user);
  
        return { token, user };
      },

    login: async (parent, { email, password }) => {
        const user = await Profile.findOne({ email });
  
        if (!user) {
          throw new AuthenticationError('No user with this email found!');
        }
  
        const correctPw = await user.isCorrectPassword(password);
  
        if (!correctPw) {
          throw new AuthenticationError('Incorrect password!');
        }
  
        const token = signToken(user);
        return { token, user };
      },


      addMeal: async (parent, {api_id, title, calories, fat, protein, carbs, image}, context) => {
        if(context.user){
          const meal = new Meal({api_id, title, calories, fat, protein, carbs, image});
      
          await Profile.findOneAndUpdate({_id:context.user._id}, {
            $addToSet: { saved_meals: meal} 
          }, 
          { new: true}
          ); 
      
          return meal
        }
      
      
        throw new AuthenticationError('Not logged in');
      }, 

      updateProfile: async (parent, {_id, calorie_goal, body_weight, height, activityLevel, loseMaintainGain, protein_goal, carb_goal, fat_goal, age}, context) => {
        if (context.user) {
          const newProf = await Profile.findOneAndUpdate({_id: _id}, {
            age: age,
            calorie_goal: calorie_goal, 
            body_weight: body_weight, 
            height: height, 
            activityLevel: activityLevel, 
            loseMaintainGain: loseMaintainGain, 
            protein_goal: protein_goal,
            carb_goal: carb_goal,
            fat_goal: fat_goal
          }, {new: true});

          return newProf;
        }
        throw new AuthenticationError('Not logged in');
      },
      
      // addDayPlan: async (parent, {title, breakfast, lunch, dinner}, context) => {
      //   if(context.user){
      //     const dayPlan = new DayMealPlan({ title, breakfast, lunch, dinner});
      
      //     await Profile.findOneAndUpdate({_id:context.user._id}, {
      //       $addToSet: { day_plans: dayPlan} 
      //     }, 
      //     { new: true}
      //     ); 
      
      //     return dayPlan
      //   }
      
      //   throw new AuthenticationError('Not logged in');
      // },
      
      removeMeal: async (parent, args, context) => {
        if(context.user){
          const meal = await Profile.findOneAndUpdate(
            {_id: context.user._id}, 
            {$pull: {saved_meals: {api_id}}}, 
            {new: true}
      
          );
      
          return meal
        }
        throw new AuthenticationError('You need to be logged in!');
      }, 
      
      removeDayPlan: async (parent, args, context) => {
        if(context.user){
          const dayPlan = await Profile.findOneAndUpdate(
            {_id: context.user._id}, 
            {$pull: {day_plans: {_id}}}, 
            {new: true}
      
          );
      
          return dayPlan
        }
        throw new AuthenticationError('You need to be logged in!');
      }


    }

}

module.exports = resolvers 
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');




const {Profile, Meal, DayMealPlan } = require('../models')


const  resolvers = {
    Query : {
        me: async (parent, args, context) => {
            if (context.user) {
              return await Profile.findOne({ _id: context.user._id });
            }
            throw new AuthenticationError('You need to be logged in!');
          },
          meals: async (parent, args) => {
            return Meal.find({})
          }, 
          meal: async (parent, {_id}) => {
            const params = _id ? {_id} : {};
            return Meal.find(params)
          }


        
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

    }

}

module.exports = resolvers 
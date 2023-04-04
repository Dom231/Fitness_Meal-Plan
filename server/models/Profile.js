const { Schema, model, Model } = require('mongoose');
const bcrypt = require('bcrypt');

const profileSchema = new Schema({
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must match an email address!'],
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
    },
    calorie_goal: {
        type: Number
    },
    body_weight: {
        type: Number,
    },
    height: {
        type: Number,
    },
    age: {
        type: Number
    },
    activityLevel: {
      type: String
    },
    loseMaintainGain: {
      type: String
    },
    protein_goal: {
        type: Number
    },
    carb_goal: {
        type: Number
    },
    fat_goal: {
        type: Number
    },
    allergies: [ 
        {
            type: String,
        }
    ],
    saved_meals: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Meal'
        }
    ],
    day_plans: [
        {
            type: Schema.Types.ObjectId,
            ref: 'DayMealPlan'
        }
    ]
  });

  profileSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });

  profileSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };
  
  const Profile = model('Profile', profileSchema);
  
  module.exports = Profile;
const { Schema, model } = require('mongoose');

const dayPlanSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    breakfast: {
        type: Schema.Types.ObjectId,
        ref: 'Meal'
    },
    lunch: {
        type: Schema.Types.ObjectId,
        ref: 'Meal'
    },
    dinner: {
        type: Schema.Types.ObjectId,
        ref: 'Meal'
    }
});

const DayMealPlan = model('DayMealPlan', dayPlanSchema);

module.exports = DayMealPlan;
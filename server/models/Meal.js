const { Schema, model } = require('mongoose');

const mealSchema = new Schema({
    api_id: {
        type: Number,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    calories: {
        type: Number,
        require: true
    },
    fat: {
        type: Number,
        require: true
    },
    protein: {
        type: Number,
        require: true
    },
    carbs: {
        type: Number,
        require: true
    },
    image: {
        type: String,
        require: true
    }
});

const Meal = model('Meal', mealSchema);

module.exports = Meal;
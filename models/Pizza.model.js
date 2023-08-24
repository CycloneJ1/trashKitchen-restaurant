// const { mongoose, Schema } = require("mongoose");

const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// create Schema
const pizzaSchema = new Schema({
    title: {
        type: String,
        required: true,
        //unique: true, // note: "The unique Option is Not a Validator. It's a convenient helper for building MongoDB unique indexes"
    },
    price: {
        type: Number,
        min: 1,
        max: 99,
    },
    isVeggie: {
        type: Boolean,
        default: false
    },
    dough: {
        type: String,
        enum: ["classic", "extra thin", "with cheese", "with garlic"]
    },
    imageFile: String,
    size: {
        type: String,
        enum: ["Small", "Medium", "Large"]
    },
    ingredients: [String]
});


// create Model
const Pizza = mongoose.model("Pizza", pizzaSchema);


module.exports = Pizza;
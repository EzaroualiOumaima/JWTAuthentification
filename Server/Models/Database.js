const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
    name : String,
    category : String,
    instructions : [String], 
    ingredients : [String], 
});
const recipeModel = mongoose.model("Recipe" , recipeSchema)
module.exports = recipeModel;
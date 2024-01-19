const express = require("express");
const router = express.Router();
const recipeController = require("../Controllers/RecipeComtroller");
const verifyToken = require("../Middlewares/authMiddleware");
//Post data
router.post('/recipes' , verifyToken , recipeController.postRecipe);

// Get all data
router.get("/recipes", recipeController.getAllRecipe);

// Get data by id
router.get("/recipes/:id", recipeController.getRecipeByid);

//Update data by id
router.put("/recipes/:id", verifyToken,  recipeController.updateRecipe);

// Delete Data by id
router.delete("/recipes/:id", verifyToken,  recipeController.deleteRecipe);



module.exports = router;


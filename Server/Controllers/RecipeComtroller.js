const recipeModel = require("../Models/Database");

const postRecipe = async (req, res) => {
  try {
    const newData = await recipeModel.create(req.body);
    res.status(200).json({
      data: newData,
      message: "Recipe added ",
    });
  } catch (error) {
    res.status(400).json({ message: message.error });
  }
};

const getAllRecipe = async (req, res) => {
  try {
    const newData = await recipeModel.find(req.query);
    res.status(201).json({
      data: newData,
      message: "Recipe fetched",
    });
  } catch (error) {
    res.status(400).json({ message: message.error });
  }
};
const getRecipeByid = async (req, res) => {
  try {
    const newData = await recipeModel.findById(req.params.id);
    res.status(201).json({
      data: newData,
      message: "Recipe fetched",
    });
  } catch (error) {
    res.status(400).json({ message: message.error });
  }
};

const updateRecipe = async (req, res) => {
  try {
    const newData = await recipeModel.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).json({
      data: newData,
      msg: "Recipe updated",
    });
  } catch (error) {
    res.status(400).json({ message: message.error });
  }
};

const deleteRecipe = async (req, res) => {
  try {
    const newData = await recipeModel.findByIdAndDelete(req.params.id);
    res.status(200).json({
      data: newData,
      msg: "Recipe deleted",
    });
  } catch (error) {
    res.status(400).json({ message: message.error });
  }
};

module.exports = {
  postRecipe,
  getAllRecipe,
  getRecipeByid,
  updateRecipe,
  deleteRecipe,
};

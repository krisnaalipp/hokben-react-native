const { Ingredient } = require("../models");

class IngredientControler {
  static async getIngredient(req, res, next) {
    try {
      const ingredient = await Ingredient.findAll();
      res.status(200).json(ingredient);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = IngredientControler;

const IngredientControler = require("../controllers/ingredientController");

const router = require("express").Router();

router.get("/", IngredientControler.getIngredient);

module.exports = router;

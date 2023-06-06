const { Router } = require("express");
const { getRecipe } = require("../controllers/GET_Recipes");
const { getDetailRecipe } = require("../controllers/GET_DetailRecipes");
const { postNewRecipe } = require("../controllers/POST_NewRecipe");
const { getDietsDB } = require("../controllers/GET_Diets");

const router = Router();

router.get("/recipe", getRecipe);
router.get("/diets", getDietsDB);
router.get("/recipe/:idRecipe", getDetailRecipe);
router.post("/recipe", postNewRecipe);

module.exports = router;

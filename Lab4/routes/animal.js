// initiating router object
const express = require("express");
const router = express.Router();
const animalController = require("../controllers/animalController");

// get routs
router.get("/", animalController.displayHomePage);
// router.get("/animalList", animalController.getAllAnimals);
// router.get("/animalList", animalController.greetPokemon);
router.get("/form", animalController.displayForm);
// post routs
router.post("/edit", animalController.searchPokemon);
router.post("/deletePokemon/:idOfPokemon", animalController.deletePokemonByID);


// Share the router with others
// CommonJS Syntax
module.exports = router;
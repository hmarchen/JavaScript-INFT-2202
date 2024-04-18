/* 
Author: Hlib Marchenko
ID: 100901448
Filename: routs
Date: 18 Apr 2024
Description: responsible for routing
 */
// initiating router object
const express = require("express");
const router = express.Router();
const animalController = require("../controllers/animalController");

// get routs
router.get("/", animalController.displayHomePage);
router.get("/animalList", animalController.getAllAnimals);
router.get("/form", animalController.displayForm);
// post routs 
router.post("/saveAnimal", animalController.saveAnimalToCollection);
router.post("/edit/:idOfAnimal", animalController.updateAnimalByID);
router.post("/deleteAnimal/:idOfAnimal", animalController.deleteAnimalByID);
router.post('/edit-from', animalController.editAnimal);


// Share the router with others
// CommonJS Syntax
module.exports = router;
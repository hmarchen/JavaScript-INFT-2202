// initiating router object
const express = require("express");
const router = express.Router();
const pokemonController = require("../controllers/pokemon");

// app.get("/hello-pokemon", )
router.get("/hello-pokemon", pokemonController.greetPokemon);
router.get("/", pokemonController.displayHomePage);
router.post("/search", pokemonController.searchPokemon);
router.post("/savePokemon", pokemonController.savePokemonToCollection);
router.get("/pokemonList", pokemonController.getAllPokemons);



// Share the router with others
// CommonJS Syntax
module.exports = router;

// ES6 Syntax
// export router

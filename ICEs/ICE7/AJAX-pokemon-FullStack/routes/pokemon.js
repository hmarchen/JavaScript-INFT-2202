const express = require("express");
require("../script");
// initiating router object
const router = express.Router();
const pokemonController = require("../controllers/pokemon");

// app.get("/hello-pokemon", )
router.get("/hello-pokemon", pokemonController.greetPokemon );

// Share the router with others
// CommonJS Syntax
module.exports = router;

// ES6 Syntax
// export router

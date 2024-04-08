const mongoose = require("mongoose");

const pokemonSchema = new mongoose.Schema({
    // mongo adds its own ID to each record
    pokemonId: Number,
    name: String,
    height: Number,
    photo: String,
});

const Pokemon = mongoose.model("Pokemon", pokemonSchema);

module.exports = Pokemon;
function greetPokemon(req, res) {

    // Sample Data logic
    //res.send("Hello Pokemon!");
    
    const pokemon = {
        name: "Pikachu",
        type: "cute cheeks",
        skills: "electricity"
    }
    res.render("greetPokemon.ejs", {pokemonDetails: pokemon});
}

module.exports = {
    greetPokemon,
}
const Pokemon = require("../models/Pokemon");

function greetPokemon(req, res) {

    // Sample Data logic
    //res.send("Hello Pokemon!");

    const pokemon = {
        name: "Pikachu",
        type: "cute cheeks",
        skills: "electricity"
    }
    res.render("greetPokemon.ejs", { pokemonDetails: pokemon });
}


function displayHomePage(req, res) {
    //display home page
    res.render("homePage.ejs");
}
async function searchPokemon(req, res) {
    // We need the data from the HTML form. The data is stored inside the request body when we send a POST request
    const formData = req.body;
    // console.log("Form Data:")
    // console.log(formData);
    // console.log("form submitted")
    const { pokemonName } = formData;
    //Line above is equivalent to const pokemonName = formData.pokemonName

    const pokemonAPIResponse = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`
    );

    const pokemonDetails = await pokemonAPIResponse.json();
    // console.log(pokemonName);
    // console.log(pokemonDetails);
    res.render("displayPokemon.ejs", { pokemon: pokemonDetails });
}

// We want to import our Pokemon model so that we can communicate with the database


async function savePokemonToCollection(req, res) {
    // Grab the form data
    const formData = req.body;
    // Create a new pokemon in our database

    try {
        await Pokemon.create({
            pokemonId: formData.pokemonId,
            name: formData.pokemonName,
            height: formData.pokemonHeight,
            photo: formData.pokemonPhoto,
        }).finally(res.redirect("/"));
    }
    catch (err) {
        console.log(`Error in crating pokemon ${formData.pokemonName}`);
        res.redirect("/");
    }
};

function getAllPokemons(req, res) {
    Pokemon.find({}).then(function (pokemons) {
        res.render('displayMyCollection.ejs', { pokemons: pokemons });
    }).catch(function (err) { console.log(err) });
}

async function getMyCollection(req, res) {
    try {
        const MyCollection = await Pokemon.find({});
        res.render("mySavedCollection.ejs", { MyCollection });

    } catch (err) { console.error("error with getting saved pokemons") }
}

async function deletePokemonByID(req, req) {
    try {
        const id = req.params.idOfPokemon;
        await Pokemon.deleteOne({ _id: id });
        res.redirect("/savedCollection");
    } catch (err) { console.log(err) };
}

function displaySignUpPage(req, res) {
    res.render("displaySignUpPage.ejs");
}

async function signUpUser(req, res) {

    const formData = req.body;
    try {
        bcrypt.hash(formData.password, 10, function (err, hash) {
            let newUser = new User({
                firstName: formData.firstName,
                lastName: formData.lastName,
                userName: formData.userName,
                email: formData.email,
                password: formData.password,
            });
            newUser.save().then(() => console.log("User saved!"));
            res.render("LoginPage.ejs");
        });
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }

}

async function loginUser(req, res) {
    const formData = req.body
    try {
        let user = User.findOne({ userName: formData.userName })

        bcrypt.compare(formData.password, user.password, function (err, result) {
            if (result == true) {
                res.locals.user = user;
                res.redirect("/");
            }
        })
    } catch (err) { }
}

module.exports = {
    greetPokemon,
    displayHomePage,
    searchPokemon,
    savePokemonToCollection,
    getAllPokemons,
    getMyCollection,
    deletePokemonByID,
    signUpUser,
    displaySignUpPage,
}
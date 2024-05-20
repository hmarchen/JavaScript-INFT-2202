const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const DBConfig = require("./config/database");

const pokemonRouter = require("./routes/pokemon");

const app = express();

require("dotenv").config();

// Connect to Database
DBConfig.connectToDatabase();

// Middle ware execute function while request in transit
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.set("views", "./views");
app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/hello", (req, res) => res.send("hello there"));

app.use("/", require("./routes/pokemon"));



app.listen(3500, () => {
    console.log("express server running on 3500...")
})


// ICE #7 DUE Tuesday Apr 2 11.59
// 1. Crate new get route for /hello-world (want to visit localhost:3500/home)
// 2.  blank page with the "Home Page"



// ICE #8: Implement add pokemons from saved collection story;
// 1. Router -GET /pokemonList 
// 2. Controller - getAllPokemons(req, res)
// 3. EJS - displayMyCollection.ejs
// As for the button to view your collections, you can add it in the homePage.ejs (for extra points put it in a navbar using EJS partials)
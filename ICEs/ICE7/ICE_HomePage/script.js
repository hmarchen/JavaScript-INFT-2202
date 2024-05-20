const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

const pokemonRouter = require("./routes/iceRouter");

const app = express();

// Middle ware execute function while request in transit
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.set("views", "./views");

app.set("view engine", "ejs");

app.use("/", pokemonRouter);

app.listen(3500, () => {
    console.log("express server running on 3500...")
})


// ICE #7 DUE Tuesday Apr 2 11.59
// 1. Crate new get route for /hello-world (want to visit localhost:3500/home)
// 2.  blank page with the "Home Page"
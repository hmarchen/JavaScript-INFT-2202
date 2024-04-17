const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const DBConfig = require("./config/database");

require("dotenv").config();
const animalRouter = require("./routes/animal");

const app = express();


// Connect to Database
DBConfig.connectToDatabase();

// Middle ware execute function while request in transit
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set("views", "./views");
app.use(express.static("public"));

app.set("view engine", "ejs");

app.use("/", require("./routes/animal"));

app.listen(process.env.PORT, () => {
    console.log(`express server running on ${process.env.PORT}...`)
})
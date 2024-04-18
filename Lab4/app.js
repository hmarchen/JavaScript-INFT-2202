/* 
Author: Hlib Marchenko
ID: 100901448
Filename: app.js
Date: 18 Apr 2024
Description: app.js file responsible for proper logic.
 */
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
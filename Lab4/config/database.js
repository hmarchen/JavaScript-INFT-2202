// Set up and connect to our database

const mongoose = require("mongoose")

// Local Database
// mongoose.connect("mongodb://127.0.0.1:27017/pokemon", () => {
//    console.log("Connected!");
//})

// Cloud Database
function connectToDatabase() 
{
     mongoose.connect(process.env.MONGO_DB)
    .then(()=> console.log("Connected to mongoDB"))
    .catch((err) => console.log(err));
}

module.exports = {
    connectToDatabase,
}
const mongoose = require("mongoose");
// Create Animal Schema
const animalSchema = new mongoose.Schema({
    // mongo adds its own ID to each record
    zoo: { type: String, required: true },
    scientificName: { type: String, required: true },
    commonName: { type: String, required: true },
    givenName: { type: String, required: true },
    gender: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    age: { type: Number, required: true },
    isTransportable: { type: Boolean, required: true }
}, {
    collection: 'Animals'
});


const Animal = mongoose.model("Animal", animalSchema);

module.exports = Animal;
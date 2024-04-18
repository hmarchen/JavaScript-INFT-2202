/* 
Author: Hlib Marchenko
ID: 100901448
Filename: Controller
Date: 18 Apr 2024
Description: responsible for manipulations with database
 */
const Animal = require("../model/Animal");


function displayHomePage(req, res) {
    //display home page
    res.render("layouts/main.ejs", { title: 'Home' });
}

function displayForm(req, res) {
    //display home page
    res.render("animals/entry-form.ejs", { title: 'Add animal to Database' });
}


async function saveAnimalToCollection(req, res) {
    // Grab the form data
    const formData = req.body;
    // Create a new animal in our database
    try {

        await Animal.create({
            zoo: formData.zoo,
            scientificName: formData.scientificName,
            commonName: formData.commonName,
            givenName: formData.givenName,
            gender: formData.gender,
            dateOfBirth: formData.dateOfBirth,
            age: formData.age,
            isTransportable: formData.isTransportable,
        }).finally(res.redirect("/animalList"));
    }
    catch (err) {
        console.log(err);
        console.log(`Error in crating animal ${formData.givenName}`);
        res.redirect("/");
    }
};

// Query the database and display all animals
function getAllAnimals(req, res) {
    Animal.find({}).sort({ _id: -1 }).then(function (animals) {
        res.render('animals/all-animals.ejs', { animals: animals, title: "All Animals" });
    }).catch(function (err) { console.log(err) });
}

// Delete animal from the database using id
async function deleteAnimalByID(req, res) {
    try {
        const id = req.params.idOfAnimal;
        await Animal.deleteOne({ _id: id });
        res.redirect("/animalList");
    } catch (err) { console.log(err) };
}

// Update animal in database using id and hidden variables
async function updateAnimalByID(req, res) {
    try {
        const id = req.params.idOfAnimal;
        var zoo = req.body.zoo;
        var scientificName = req.body.scientificName;
        var commonName = req.body.commonName;
        var givenName = req.body.givenName;
        var gender = req.body.gender;
        var dateOfBirth = req.body.dateOfBirth;
        var age = req.body.age;
        var isTransportable = req.body.isTransportable;
        await Animal.updateOne({ _id: id }, { $set: { "zoo": zoo, "scientificName": scientificName, "commonName": commonName, "givenName": givenName, "gender": gender, "dateOfBirth": dateOfBirth, "age": age, "isTransportable": isTransportable} });
        res.redirect("/animalList");
    } catch (err) { console.log(err) };
}
// Transfer hidden variables to Edit page
function editAnimal(req, res) {
    const formData = req.body; // Get form data from request
    res.render('animals/edit-animal.ejs', { formData, title: "Edit Animal" }); // Render Form 2 with form data
  }

// Export for later use
module.exports = {
    displayForm,
    displayHomePage,
    saveAnimalToCollection,
    getAllAnimals,
    deleteAnimalByID,
    updateAnimalByID,
    editAnimal,
}
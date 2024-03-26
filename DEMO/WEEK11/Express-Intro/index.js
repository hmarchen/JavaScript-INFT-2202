// CommonJS Syntax uses 'require' instead of 'import'

// Require without a relative path will search through your node_modules

// Require with a relative path will search through your file directory 
const express = require("express")

const app = express();

//middleware
app.set('views', "./views");
// The line below configures the default template engine
app.set("views engine", "ejs");

app.get("/hello-world", function (request, response) {
    // console.log(`Server has received a request at ${request.url}`);
    // response.send("Hello World!")

    response.render("index.ejs", { data: "123", clothes: ["T-shirt", "Polo", "Jeans", "Coat", "o"] });

})

app.get("*", (req, res) => {
    res.render('color.ejs', {ChosenColor: req.path});
});



// attaches running app to port 3002
app.listen(3500, () => console.log("server listening on port 3002..."))
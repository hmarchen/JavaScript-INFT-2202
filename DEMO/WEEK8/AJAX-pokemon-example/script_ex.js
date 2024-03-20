console.log("script is running")

// document.getElementById("loadPokemon").addEventListener("click", function () {
//     // We want to create a new XMLHTTP Request
//     // Object to grab the Pokemon API Data

//     var xhr = new XMLHttpRequest();
//     xhr.open("GET", "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0");

//     xhr.onload = function () {
//         console.log("api has responded!");
//       //  console.log(this);
//         var response = JSON.parse(this.responseText);
//         console.log(response);
        var pokemonString = "";
//         response.results.forEach((pokemon) => {
//             pokemonString += `<li><a href=${pokemon.url}>${pokemon.name}</a></li>`;
//         })
//         document.getElementById("pokemonList").innerHTML = pokemonString;
//     };

//     xhr.send();
// })

// Promises

//var userData = await postgresDatabase.GetUserData()

// // the reason we defining the promise in the format below is to simulate an API / Database call

// const myPromise = new Promise((resolve, reject) => {
// setTimeout(() => {
//     reject({status: 400 , error: "could not found"});

// }, 5000);
// })

// console.log(myPromise);

// // THe code below will wait until the promise resolves
// myPromise.then(reject => {
//     console.log(reject)
// })

// .catch((err) => console.log(err));

// function FetchUserData(userData) {
//     setTimeout(() => {
//         reject({status: 400 , error: "could not found"});
    
//     }, 5000);

// }

// // await WAITEs for promise to finish but .than 
// async function handlePromise(param) {  
// let promiseResult = await FetchUserData();
// console.log(promiseResult);
// }





document
    .getElementById("loadPokemon")
    .addEventListener("click", function () {
        // Fetch the list of pokemons
        // REFERENCE: xhr.open("GET", "https:pokeapi.co/api/v2/pokemon?limit=10&offset=0");
    })

let pokemonList = fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0", {
    method: "GET",
}
).then((response) => {
    return response

})
.then(response => {
console.log(jsonResult);
jsonResult.forEach(pokemon => {
    pokemonString += `<li><a href=${pokemon.url}>${pokemon.name}</a></li>`;
});
}).catch(err => console.log("We have encountered an error: ", err))
.finally(() => {
    console.log("API Call complete")
})




document
    .getElementById("loadPokemon")
    .addEventListener("click", async function () {
        try {
            let pokemonList = await fetch(
                "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0"
            );
            var pokemonString = "";
            var jsonResult = await pokemonList.json();
            pokemonResult.results.forEach((pokemon) => {
                pokemonString += `<li><a href=${pokemon.url}>${pokemon.name}</a></li>`;
                
            });
            document.getElementById("pokemonList").innerHTML = pokemonString;
        } catch (err) {
            console.log(err);
        }
        });

        // ICE 6:
        // 1. Create a form where the user will be able to type in the name of the pokemon
        // 2. After the user submits the form, sent an API GET Requst to the pokeapi searching for the details of the pokemon name the user

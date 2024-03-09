console.log("Script is running!");

// --------------- Asynchronous API Call using XMLHttpRequest --------------------

// document.getElementById("loadPokemon").addEventListener("click", function () {
//   // We want to create a new XMLHTTPRequest Object to grab the Pokemon API Data

//   console.log("callback function");
//   var xhr = new XMLHttpRequest();

//   // The line below will create a GET HTTP Request to the pokemon API via the URL
//   // The call below is ASYNCHRONOUS
//   xhr.open("GET", "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0");

//   xhr.onload = function () {
//     console.log("API has responded!");
//     //   console.log(this);
//     var response = JSON.parse(this.responseText);
//     console.log(response);
//     var pokemonString = "";
//     response.results.forEach((pokemon) => {
//       pokemonString += `<li><a href=${pokemon.url}>${pokemon.name}</a></li>`;
//     });
//     document.getElementById("pokemonList").innerHTML = pokemonString;
//   };
//   xhr.send();
// });

// --------------- Asynchronous API Call using fetch --------------------

// Promises

// var userData = await postgresDatabase.GetUserData() // for example takes 5 seconds
// // Using Async/Await to handle promise
// function fetchUserData(userData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({ username: "user", password: 123 });
//       // reject({ status: 400, error: "could not find user" });
//     }, 5000);
//   });
// }

// async function handlePromise() {
//   console.log("Initiating call to database...");
//   let promiseResult = await fetchUserData();
//   console.log(promiseResult);
// }

// handlePromise();

// The reason we are defining a promise in the format below is to simulate an API/Database call
// const DBGetUserData = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({ username: "user", password: 123 });
//     // reject({ status: 400, error: "could not find user" });
//   }, 5000);
// });

// console.log(DBGetUseData);
// Using .THEN()
// The code below will WAIT until the promise resolves (either fulfilled or rejected and THEN it will execute the callback function and pass the promise response as an argument to it)
// DBGetUserData.then((response) => {
//   console.log("Promise successfully fulfilled: ", response);
// })
//   // .then(res => { });
//   // .then(res => { });
//   // .then(res => { });
//   .catch((err) => console.log("Promise error was caught: ", err));

// console.log(" I am line 71 and I ran.");

// document.getElementById("loadPokemon").addEventListener("click", function () {
//   // Fetch the list of pokemons
//   // Using FETCH and .THEN
//   let pokemonList = fetch(
//     "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0",
//     {
//       method: "GET",
//     }
//   )
//     .then((response) => {
//       return response.json();
//     })
//     .then((jsonResult) => {
//       // The scope of the jsonResult variable is limited to only this .then callback function
//       console.log(jsonResult);
//       var pokemonString = "";
//       // Display list of pokemons in HTML
//       jsonResult.results.forEach((pokemon) => {
//         pokemonString += `<li><a href=${pokemon.url}>${pokemon.name}</a></li>`;
//       });
//       document.getElementById("pokemonList").innerHTML = pokemonString;
//       return jsonResult;
//     })
//     .catch((err) => console.log("We have encountered an error: ", err))
//     .finally(() => {
//       console.log("API Call complete.");
//     });
// });

// USING FETCH & ASYNC AWAIT
var pokemonString = "";
document.getElementById("loadPokemon").addEventListener("click", async function () {
  event.preventDefault();
    let pokemonName = document.getElementById("pokemonName").value.toLowerCase();
    console.log(pokemonName);
    // Fetch the list of pokemons
    try {
      console.log(pokemonName);
      
      let pokemonList = await fetch(
        // URL: for ICE -> Store user input in variable called pokemonName
        // `https://pokeapi.co/api/v2/pokemon/${pokemonName}`

        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`, {
          method: "GET"
        }
      
      ) // By Default, it sends a GET HTTP Request
      
      if (!pokemonList.ok) {
        if (pokemonList.status === 404) {
          console.log("Resource not found (404)");
          pokemonString = `<li>Pokemon not found, Please enter another one</li>`;
      document.getElementById("pokemonList").innerHTML = pokemonString;
        } else {
          throw new Error(`Failed to fetch: ${pokemonList.status} - ${pokemonList.statusText}`);
        }
      }else{

      var jsonResults = await pokemonList.json();
      var name = jsonResults.name;
      var url = `https://pokeapi.co/api/v2/pokemon/${name}`;
      console.log(jsonResults);
      // debugger;
        pokemonString = `<li><a href=${url}>${name}</a></li>
                         <li>ability 1: ${jsonResults.abilities[0].ability.name}</li>
                         <li>ability 2: ${jsonResults.abilities[1].ability.name}</li>
                         <img src="${jsonResults.sprites.front_default}">`;
      document.getElementById("pokemonList").innerHTML = pokemonString;
    }
    } catch (err) { 
      console.log(err);
    }
  
  });

// ICE 6: DUE Monday @ 11:59 PM
// 1. Create a form where the user will be able to type in the name of a pokemon
// 2. After the user submits the form, send an API GET Request to the pokeapi searching for the details of the pokemon name the user submitted from the form.
// 3. If the api returns the pokemon details successfully, then display the details of the pokemon in the HTML (i.e. update the body of the HTML to have the pokemon)
//4 If  the api returns an error that it can't find the pokemon, display the error to the user and ask them to type a different pokemon name
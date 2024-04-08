# FullStack Pokemon
### User Stories
A user story is an informal, general explanation
of a software feature written from the 
perspective of the end user.

1. As a user, I want to be able to Search for a Pokemon
	- EJS View - homePage (search form)
	- Router - GET / 
	- Controller - searchPokemon(req, res)
	- Router - POST /search 
	- EJS View - displayPokemon
	- 
2. As a user, I want to be able to Save a pokemon to my Saved Collection
	* Crate a Configuration file to establish a pokemon to my Saved Collection (Database)
	* Define a Pokemon Model/Schema to structure the pokemon data that will be saved to our DB
	* Crate form (behaves like a button) in displayPokemon.ejs that says "Add Pokemon My Collection"
	* Router - Post
	* Controller - savePokemonToCollection.
3. As a user, I want to be able to Create my own Pokemon in my in my Saved Collection.
4. As a user, I want to be able to Read the Pokemon in my Collection.
5. As a user, I want to be able to Delete a Pokemon.
6. As a user, I want to be able to Sign up for a new account.
7. As a user, I want to be able to Log in to an existing account.
###


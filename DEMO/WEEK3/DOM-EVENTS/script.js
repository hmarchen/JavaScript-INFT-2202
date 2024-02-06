// - As a user, I want to type into a text box my todo
// - As a user, I want to click on the 'Add' button and add the to
//   do than I typed from the text box onto my todo list`

const addBtn = document.getElementById('submit-btn');
// const addBtn2 = document.querySelector('#submit-btn')

const inputEl = document.querySelector("#toDoItem");

//Grabs the HTML Input element and store it inside a variable called inputEL

const unOrderedListEL = document.querySelector('#to-do-list');

// same as function (event) { }
addBtn.addEventListener("click", (event) => {

    event.preventDefault(); // Stops browser from refreshing
    console.log("This is the browser captured event object");
    console.dir(inputEl.value);
    const newListItem = document.createElement('LI');
    newListItem.innerText = inputEl.value
    unOrderedListEL.append(newListItem);
});
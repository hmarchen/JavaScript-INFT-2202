console.log("script ran")

// I want to click on a box and it should show me an X
// const restartBtn = 
// The variable below will grab all the HTML elements that mach the cases name in argument ('box') and return all the elements

// const Boxes = document.getElementsByClassName('box');
// console.log(Boxes);
// // boxes.forEach({box +> box.addElementsListener("click", ( => { }))})
// for (let i = 0; i < Boxes.length; i++) {
//     Boxes[i].addEventListener("click", (event) => {
//         // console.log(event.target)
//         console.log("box " + event.target.classList[2] + " was clicked!");
//     })
// }


const mainContainer = document.querySelector(".main-container")
mainContainer.addEventListener("click", (event) => {console.log("box " + event.target.classList[2] + " was clicked!");
if (playerTurn == 'X') {
    event.target.innerText = "X";
    playerTurn = 'O';
}
else if (playerTurn == 'O'){
    event.target.innerText = 'O'
    playerTurn ='X';
};
    checkForWinner()
});
 // Initialize a new vairable called player to keep track of who's turn it is
 playerTurn = 'X';
 
 
 // Fetch the element with a class name of main-confiner and store it inside of
 // a variable called mainContainer
 
 const squares = document.querySelectorAll(".box");

 function checkForWinner(event){
    // console.log(squares);
    // console.log(squares[1].innerText);
    if (squares[0].innerText == "X" &&
        squares[1].innerText == "X" &&
        squares[2].innerHTML == "X"){
           alert("X won!")
       }
 }
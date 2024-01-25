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
 event.target.innerText = " X";});

const playerTurn = 'X';

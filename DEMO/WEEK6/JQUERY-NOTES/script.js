const form = $("form");

console.log(form);

const firstNameInput = $("input#first name");

console.log(firstNameInput.value);

$("input#submit-btn").click(function (event) {
    event.preventDefault();
    const myFormArray = $("form")[0].elements;
    for (let input of myFormArray){
        console.log(input.value);}
    });
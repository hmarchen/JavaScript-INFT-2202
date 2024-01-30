console.log("script ran!");

function validateForm(e) {
    // e.preventDefault();
    console.dir(document.fonts);
    let inputValue = document.forms["myform"]["fname"].value;

    console.log(inputValue); 
    if (inputValue == "" || inputValue.length < 2) {
        alert("Form validation failed");
        return false;
    }
}
console.log("script ran!");

// function validateForm(e) {
//     // e.preventDefault();
//     console.dir(document.fonts);
//     let inputValue = document.forms["myform"]["fname"].value;

//     console.log(inputValue); 
//     if (inputValue == "" || inputValue.length < 2) {
//         alert("Form validation failed");
//         return false;
//     }
// }
const observer = new IntersectionObserver( (entries) => {
    entries.forEach( (entry) => { 
        console.log(entry)
    if (entry.isIntersecting) 
    {
    entry.target.classList.add('show');
    } else {
    entry.target.classList.remove('show');
    }
    });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
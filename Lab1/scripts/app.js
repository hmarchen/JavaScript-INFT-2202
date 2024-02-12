/* 
Author: Hlib Marchenko
ID: 100901448
Filename: app.js
Date: 06 Feb 2024
Description: app.js file responsible for proper logic and text insertion using DOM manipulations.
 */
//Declaring the constants later used in the code
console.log("uyfyfy");
const innerBody = document.querySelector(".container");
const mainBody = document.getElementsByTagName("body");
const navList = document.getElementById('nav-bar');
const navbar = document.querySelector(".navbar");
const filePath = window.location.pathname;

//Using only JavaScript change the Products link found in the Navbar above to Interests.
const productsLabel = document.getElementsByClassName('Products');
productsLabel[0].innerText = "Interests";

//Using only JavaScript, add another link to the Navbar above named Human Resources, that sits between About Us and Contact Us.
const humanResources = document.createElement('li');
const humanResourcesAhref = document.createElement('a');
humanResources.classList.add('nav-item');
humanResourcesAhref.classList.add('nav-link');
humanResourcesAhref.href = '#';
humanResourcesAhref.innerText = "Human Resources";
humanResources.appendChild(humanResourcesAhref);

navList.insertBefore(humanResources, navList.children[4]);


// Inserts different contents depending on file path (name of the file)
if (filePath == '/index.html'){
window.location.replace("/home.html");
}
// home page with greeter ;)
if (filePath == '/home.html'){
    let greater = document.createElement('h1');
    let pig = document.createElement('img');
    let div1 = document.createElement('div');
    pig.src = '../images/welcome.gif';
    pig.className = 'img welcome';
    div1.appendChild(pig);
    greater.textContent = "Hello and Welcome User";
    greater.classList.add('text');
    document.querySelector('.greeter').append(greater, div1);
}

// product page (later Interests) with 3 of my favorite pieces of media
if (filePath == '/product.html'){

    document.getElementsByTagName('title')[0].innerText = "Interests";
    let br = document.createElement('br');
    let br2 = document.createElement('br');
    let br3 = document.createElement('br');
    let header = document.createElement('h1');
    let picture1 = document.createElement('img');
    let picture2 = document.createElement('img');
    let picture3 = document.createElement('img');
    let nameOfTheBook = document.createElement('h3');
    let nameOfTheBook2 = document.createElement('h3');
    let nameOfTheBook3 = document.createElement('h3');
    let div1 = document.createElement('div');
    let div2 = document.createElement('div');
    let div3 = document.createElement('div');
    
    header.innerText = 'Favorite media';
    header.className = 'text2';
    picture1.src = '../images/book.png';
    picture1.alt = 'book';
    picture2.src = '../images/solaris.jpg';
    picture2.alt = 'movie';
    picture3.src = '../images/stalker-md.jpg';
    picture3.alt = 'game';
    div1.className = 'row';
    div2.className = 'row';
    div3.className = 'row';
    picture1.className = 'col-3';
    nameOfTheBook.className = 'col-sm';
    picture2.className = 'col-3';
    nameOfTheBook2.className = 'col-sm';
    picture3.className = 'col-3';
    nameOfTheBook3.className = 'col-sm';
    nameOfTheBook.textContent = "1984 by George Orwell Thematically, it centres on the consequences of totalitarianism, mass surveillance and repressive regimentation of people and behaviours within society.";
    nameOfTheBook2.textContent = "2002 Solaris The film is set almost entirely on a space station orbiting the planet Solaris, adding flashbacks to the previous experiences of its main characters on Earth.";
    nameOfTheBook3.textContent = "Game series S.T.A.L.K.E.R is a first-person-shooter survival horror video game franchise developed by Ukrainian game developer GSC Game World. The series is set in an alternate version of the present-day Chernobyl Exclusion Zone in Ukraine";
    innerBody.appendChild(header);
    innerBody.appendChild(br);
    div1.appendChild(picture1);
    div1.appendChild(nameOfTheBook);
    div2.appendChild(picture2);
    div2.appendChild(nameOfTheBook2);
    div3.appendChild(picture3);
    div3.appendChild(nameOfTheBook3);
    innerBody.appendChild(div1);
    innerBody.appendChild(br2);
    innerBody.appendChild(div2);
    innerBody.appendChild(br3);
    innerBody.appendChild(div3);
}

// services page with embedded pdf that represents my resume
if (filePath == '/services.html') {
    let pdf = document.createElement('embed');
    pdf.src = "../images/Resume Marchenko Hlib.pdf";
    pdf.width = "1300";
    pdf.height = "654.4";
    pdf.type = "application/pdf";
    innerBody.appendChild(pdf);
}

// about page, with short paragraph about myself
if (filePath == '/about.html') {
    innerBody.classList.add('row');
    let picture1 = document.createElement('img');
    let aboutMe = document.createElement('h3');
    let div1 = document.createElement('div');
    let div2 = document.createElement('div');
    div1.className = 'col-sm-4';
    div2.className = 'col-7 text2';
    picture1.src = '../images/1701719333487.jpg';
    picture1.alt = 'Me';
    picture1.className = 'img';
    aboutMe.innerText = 'I am passionate about technology and, in my free time, I explore the world of Linux, conduct research on embedded technology, RF frequency analyzers and engage in ethical hacking.'
    div1.appendChild(picture1);
    div2.appendChild(aboutMe);
    innerBody.append(div1, div2);
}

// statement responsible for displaying contact form for user to fill
if (filePath == '/contact.html') {
    let br = document.createElement('br');
    let form = document.createElement('form');
    let div1 = document.createElement('div');
    let div2 = document.createElement('div');
    let div3 = document.createElement('div');
    let div4 = document.createElement('div');
    let button = document.createElement('button');
    let label1 = document.createElement('label');
    let label2 = document.createElement('label');
    let label3 = document.createElement('label');
    let label4 = document.createElement('label');
    let input1 = document.createElement('input');
    let input2 = document.createElement('input');
    let input3 = document.createElement('input');
    let textArea = document.createElement('textarea');
    div1.className = 'mb-3 mt-3';
    div2.className = 'mb-3 mt-3';
    div3.className = 'mb-3 mt-3';
    div4.className = 'mb-3 mt-3';

    label1.for = 'name';
    label1.className = 'form-label text3';
    label1.innerText = 'Name:';
    input1.type = 'text';
    input1.className = 'form-control';
    input1.id = 'name';
    input1.placeholder = 'Enter your name';
    input1.name = 'name';

    label2.for = 'phone';
    label2.className = 'form-label text3';
    label2.innerText = 'Phone:';
    input2.type = 'tel';
    input2.className = 'form-control';
    input2.id = 'phone';
    input2.placeholder = 'Enter your phone number';
    input2.name = 'phone';

    label3.for = 'email';
    label3.className = 'form-label text3';
    label3.innerText = 'Email:';
    input3.type = 'email';
    input3.className = 'form-control';
    input3.id = 'email';
    input3.placeholder = 'Enter your email';
    input3.name = 'email';

    label4.for = 'note';
    label4.className = 'form-label text3';
    label4.innerText = 'Message';
    textArea.name = 'email';
    textArea.cols = '40';
    textArea.rows = '5';

    div1.append(label1, input1)
    div1.append(label2, input2)
    div1.append(label3, input3)
    div1.append(br, textArea, label4)

    button.type = 'submit';
    button.className = 'btn btn-primary';
    button.innerText = 'Submit';

    form.append(div1, div2, div3, button);
    innerBody.append(form)
    button.addEventListener("click", (event) => {console.log("Name: " + input1.value + "\nPhone: " + input2.value + "")
    setTimeout(() => {
        window.location.replace('/home.html');
    }, "3000");
    event.preventDefault();});

}

displayFooter();

// function responsible for displaying footer of the page
function displayFooter(){
let footer =  document.createElement('footer');
let span = document.createElement('span');
let ul = document.createElement('ul');
let li1 = document.createElement('li');
let li2 = document.createElement('li');
let a1 = document.createElement('a');
let a2 = document.createElement('a');
footer.className = 'footer bg-dark text-white text-center py-3';
span.innerHTML = '&copy; 2024 Lab 1 Hlib Marchenko';
ul.className = 'nav justify-content-center';
li1.className = 'nav-item';
li2.className = 'nav-item';
a1.href = './scripts/app.js';
a2.href = './style/style.css';
a1.className = 'nav-link';
a2.className = 'nav-link';
a1.innerText = 'app.js';
a2.innerText = 'app.css';
footer.appendChild(span);
li1.appendChild(a1);
li2.appendChild(a2);
ul.appendChild(li1);
ul.appendChild(li2);
footer.appendChild(ul);
mainBody[0].insertBefore(footer, mainBody[3]);
}

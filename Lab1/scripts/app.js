const innerBody = document.querySelector(".container");
const navbar = document.querySelector(".navbar");
const filePath = window.location.pathname;
console.log(filePath);
//Using only JavaScript change the Products link found in the Navbar above to Interests.
const productsLabel = document.getElementsByClassName('Products');
productsLabel[0].innerText = "Interests";

navbar.addEventListener("click", (event) => {console.log(event.target.classList[1] + " was clicked")})

if (filePath == '/index.html'){
window.location.replace("/home.html");
}
if (filePath == '/home.html'){
    let greater = document.createElement('h1')
    greater.textContent = "Hello and Welcome User";
    greater.classList.add('text')
    document.querySelector('.greeter').appendChild(greater);
}
if (filePath == '/product.html'){
    let br = document.createElement('br');
    let br2 = document.createElement('br');
    let br3 = document.createElement('br');

    let picture1 = document.createElement('img');
    picture1.src = '../images/book.png';
    picture1.alt = 'book';
    innerBody.appendChild(picture1);
    let nameOfTheBook = document.createElement('h2');
    nameOfTheBook.textContent = "1984 by George Orwell";
    innerBody.appendChild(nameOfTheBook);
    let picture2 = document.createElement('img');
    picture2.src = '../images/solaris.jpg';
    picture2.alt = 'movie';
    innerBody.appendChild(br2);
    innerBody.appendChild(picture2);
    let nameOfTheBook2 = document.createElement('h2');
    nameOfTheBook2.textContent = "1972 Solaris";
    innerBody.appendChild(nameOfTheBook2);
    innerBody.appendChild(br3);
    let picture3 = document.createElement('img');
    picture3.src = '../images/stalker-md.jpg';
    picture3.alt = 'game';
    innerBody.appendChild(picture3);
    let nameOfTheBook3 = document.createElement('h2');
    nameOfTheBook3.textContent = "Game series S.T.A.L.K.E.R";
    innerBody.appendChild(nameOfTheBook3);
}
if (filePath == '/services.html') {
    let pdf = document.createElement('embed');
    pdf.src = "./Resume Marchenko Hlib.pdf";
    pdf.width = "1300";
    pdf.height = "700";
    pdf.type = "application/pdf";
    innerBody.appendChild(pdf);
}
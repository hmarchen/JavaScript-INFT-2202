$(document).ready(function () {
    console.log("JQuery is running!");

    // Injecting an H1 header into the header HTML element with an id of "header"
    // $("[id=header]")  also works
    $("#header").html("<h1>Welcome to our Travel Blog</h1>");

    // Create Navigation Bar
    const categories = ["Beaches", "Mountains", "Cities", "Forests", "Deserts"];
    let navContent = "<ul>";
    $.each(categories, function (index, category) {
        // console.log(index + ": " + category);
        navContent += `<li onClick="loadCategoryContent('${category}')">${category}</li>`;
    });
    navContent += "</ul>";
    $("#navbar").html(navContent);
});

window.loadCategoryContent = function (category) {
    console.log("loadCategoryContent function ran! Category: " + category);
    let content = `<h2>${category}</h2>`;
    content += `<div class="carousel" id="${category.toLowerCase()}-carousel"></div>`
    $("#content").html(content);

    populateCarousel(category.toLowerCase());
};

// Create a function to populate our Carousel
// Create image gallery in memory
const categoryImages = {
    cities: [
        {alt: "Kyiv", src: "city1.jpg"},
        {alt: "Paris", src: "city2.jpg"},
        {alt: "Budapest", src: "city3.jpg"}
    ],
    forests: [
        {alt: "Daintree Rainforest", src: "forest1.jpg"},
        {alt: "Sundarbans", src: "forest2.jpg"},
        {alt: "Amazon", src: "forest3.jpg"}
    ],
    deserts: [
        {alt: "Antarctic Desert", src: "desert1.jpg"},
        {alt: "Arctic Desert", src: "desert2.jpg"},
        {alt: "Sahara Desert", src: "desert3.jpg"}
    ],
    beaches: [
        {alt: "Beach Sunset", src: "beach1.jpg"},
        {alt: "Sandy Shore", src: "beach2.jpg"},
        {alt: "Marina Resort", src: "beach3.jpg"}
    ],
    mountains: [
        {alt: "Mountain Range", src: "mountain1.jpg"},
        {alt: "Snowy Peak", src: "mountain2.jpg"},
        {alt: "Hiking Trail", src: "mountain3.jpg"}
    ]
};
const categoryDescription = {
    cities: [
        "My favorite city, obviously is where I was born, City Of Heroes Kyiv"
    ],
    forests: [
        "List of the forests includes Daintree Rainforest, Sundarbans and Amazon"
    ],
    deserts: [
        "For some people it would come as a surprise but Arctic and Antarctic are bought considered deserts"
    ],
};
function populateCarousel (category) {
    const images = categoryImages[category];
    
    
    // [].forEach(), [].map() -> 2 Array Iterator Method
    let carouselContent = images.map((image, index) => {
        return `
        <div class="carousel-item ${index == 0 ? 'active' : ''}">
        <div class="image" style="background-image: url('./images/${image.src}')"></div>
        <p>${image.alt}</p>
        </div>
        `;
    }).join("");
    
    $(`#${category}-carousel`).html(carouselContent);
    
    $(`#${category}-carousel`).append(`
    <button class="carousel-control prev" onclick="moveCarousel('${category}', -1)">
    &lt;
    </button>
    <button class="carousel-control next" onclick="moveCarousel('${category}', 1)">
    &gt;
    </button>
    `);
    // 3. Dynamically add content to the Footer using jQuery. The content should include a short description of your favorite category/place and why.
    const descs = categoryDescription[category];
    let description = descs.map((desc) => desc);
    $(`footer`).html(`&copy; 2024 ${description}`);
};


window.moveCarousel = function (category, direction) {
    // debugger;

    let items = $(`#${category}-carousel .carousel-item`);
    let activeIndex = items.index(items.filter(".active"));
    let newIndex = activeIndex + direction;

    if (newIndex >= items.length) {
        newIndex = 0;
    } 
    else if (newIndex < 0) {
        newIndex = items.length - 1;
    }

    items.removeClass("active");
    items.eq(newIndex).addClass("active");
};

// ICE 5 Tasks;
// 1. Populate Cities, Forests & Deserts
// 2. Add 3 images to the Cities & Desert (Optionally, you may add images for the rest of the categories)
// 3. Dynamically add content to the Footer using jQuery. The content should include a short description of your favorite category/place and why.
// DUE 19th at 11:59

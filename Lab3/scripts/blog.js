/* 
Author: Hlib Marchenko
ID: 100901448
Filename: blog.js
Date: 20 Mar 2024
Description: blog.js file responsible for proper logic and display of the blog page.
 */
var blog_image = "";
var blog_header = "";
var blog_paragraph = "";

if(filePath == 'blog.html') { 
  (async () => {
  let BlogList = await fetch(
    // Fetching text data from provided source

    `https://jsonplaceholder.typicode.com/posts?limit=20&offset=0`, {
      method: "GET"
    },

    );
    let BlogImages = await fetch(
      // Fetching pictures from pixabay using obtained API key
      `https://pixabay.com/api/?key=42970270-5c418c11121e28ec5bd2aa090&q=philosophy&image_type=photo&pretty=true&orientation=horizontal`,
      {method: "GET"},

    )
    var jsonImages = await BlogImages.json();
    var jsonResults = await BlogList.json();
    // Implement for loop to display all 20 blog posts
    for (let i = 0; i < 20; i++)
    {
      // Using only required segments of json
      blog_header = jsonResults[i].title;
      blog_paragraph = jsonResults[i].body;
      blog_image = jsonImages.hits[i].webformatURL;
      // Implementing card layout, with flex properties
      var blogCard = `
  <div class="hidden d-flex card shadow-0 m-2" style="width: 48%; max-height: 80%">
  <div class="bg-image ripple" data-mdb-ripple-color="light">
    <img src="${blog_image}" class="img-fluid blog-image" style="width:1000%"/>
    <a href="#!">
    </a>
  </div>

  <div class="card-body">
    <h5 class="card-title">${blog_header}</h5>
    <p class="card-text">
    ${blog_paragraph}
    </p>
  </div>
  `;

      $('.blog-main').append(blogCard);
  }
  // Utilizes observer to truck down elements that are hidden,
  // and smoothly displaying after they enter the screen
  const observer = new IntersectionObserver( (entries) => {
    entries.forEach( (entry) => { 
        // console.log(entry)
      if (entry.isIntersecting) 
      {
        $(entry.target).addClass('show');
      } else {
        $(entry.target).removeClass('show');
      }
      });
  });
// Observe all the elements of class hidden
    const hiddenElements = $('.hidden');
    hiddenElements.each((index, el) => observer.observe(el));
  })();

}

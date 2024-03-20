var blog_image = "";
var blog_header = "";
var blog_paragraph = "";

if(window.location.pathname == '/blog.html') { 
  (async () => {
  let BlogList = await fetch(
    // URL: for ICE -> Store user input in variable called 

    `https://jsonplaceholder.typicode.com/posts?limit=20&offset=0`, {
      method: "GET"
    },

    );
    let BlogImages = await fetch(
      
      `https://pixabay.com/api/?key=42970270-5c418c11121e28ec5bd2aa090&q=philosophy&image_type=photo&pretty=true&orientation=horizontal`,
      {method: "GET"},

    )
    var jsonImages = await BlogImages.json();
    var jsonResults = await BlogList.json();
    for (let i = 0; i < 20; i++)
    {
      blog_header = jsonResults[i].title;
      blog_paragraph = jsonResults[i].body;
      blog_image = jsonImages.hits[i].webformatURL;
      var blogCard = `
  <div class="hidden d-flex card shadow-0 m-2" style="width: 48%">
  <div class="bg-image ripple" data-mdb-ripple-color="light">
    <img src="${blog_image}" class="img-fluid" style="width:80%"/>
    <a href="#!">
      <div class="mask" style="background-color: rgba(251, 251, 251, 0.15)"></div>
    </a>
  </div>

  <div class="card-body">
    <h5 class="card-title">${blog_header}</h5>
    <p class="card-text">
    ${blog_paragraph}
    </p>


  </div>
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

    const hiddenElements = $('.hidden');
    hiddenElements.each((index, el) => observer.observe(el));
  })();

}

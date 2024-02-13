$(document).ready(function (){
    console.log("jQuery is running");
    //injecting an H1 header into the header HTML element
    $('[id=header]').html("<h1>Welcome to our travel blog!</h1>");
    
    const categories = ["Beaches", "Mountains", "Cities", "Forests", "Deserts"];
    let navContent = "<ul>";
    $.each(categories, function (index, category){
        // console.log(index);
        // console.log(category);
        navContent += `<li onclick="loadCategoryContent"('${category}')">${category}</li>`;

    })
    navContent+= "</ul>";
    $("#navbar").html(navContent);
})

window.loadCategoryContent = function (category) {
    console.log("loadCategoryContent function ran!");
    console.log(category);
}
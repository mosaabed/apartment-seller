
$("button").on("click", function () {
    let address = $("#addr-input").val()
    let minPrice = $("#min-p-input").val()
    let maxPrice = $("#max-p-input").val()
    let minRooms = $("#min-r-input").val()
    let maxRooms = $("#max-r-input").val()
    let immediate = $("#immed-y")

    let relevantApts = findRelevantApts(address, minPrice, maxPrice, minRooms, maxRooms, immediate)
    renderApts(relevantApts)
    console.log("1")
})

const menuData = {
    menu: [
      { name: "Google", link: "http://google.com" },
      { name: "Facebook", link: "http://facebook.com" },
      { name: "Instagram", link: "http://nstagram.com" },
      { name: "Twitter", link: "http://twitter.com" },
    ]
  };

const renderApts = function (apartmentss) {
    $("#results").empty()
    console.log(apartmentss[0]) 
    const source = $("#menu-template").html();
    console.log(source )
    const template = Handlebars.compile(source)
    const newHTML = template(apartmentss);
    console.log(newHTML)
    // const source = $('#menu-template2').html();
    // const template = Handlebars.compile(source);
    // const newHTML = template(menuData);
    // console.log(newHTML)
    //console.log(apartmentss)
    // append our new html to the page
  
    $("#results").append(newHTML);
    //$("#results").append("<div>" + "aaaaaaaaaaa "+"</div>")

      
    
    //array of apartments to render
    //Your code goes here.
}

renderApts(apartments) //renders apartments when page loads
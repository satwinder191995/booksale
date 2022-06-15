function search() {
  const val = document.getElementById("searchInput").value
  $('#container').empty();
  let cardContainer = `<div class= "row my-5" id="searchContainer">
  <h1 id="loading" class="text-center">Loading ....</h1>
  </div>`
  $('#container').append(cardContainer);
  const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'amazon-kindle-scraper.p.rapidapi.com',
        'X-RapidAPI-Key': '91a39404b6msha23bfad00fea784p172fd8jsn2f19e9df0ae8'
    }
};

fetch(`https://amazon-kindle-scraper.p.rapidapi.com/search/${val}?api_key=bc09e263d60d1bbdfc2455c657c5e9bd`, options)
    .then(response => response.json())
    .then(books => {
        console.log(books)
       
        // Create the book cards
         books.results.forEach((book) => {
            if(book.price ===null){
                var price = 5.99;
            }else{
              var price = book.price;
            }
            let card = `  
        <div class="col-4 col-md-2 my-4" >
            <img src="${book.image}" class="card-img-top h-50" alt="${book.name} book image" />
            <div class="card-body" style="height:140px;">
                <h6 class="card-title overflow-auto" style="height:50px;">${book.name}</h5>
                <p class="card-text">
                 Price: ${price}
                </p>
            </div>
            <button type="button" class="btn btn-primary w-100" id="addToCart" title="${book.name}" price="${book.price}">
            Add to cart
          </button>
          </div>
        </div>
        `;
            $('#loading').text("");
            $('#searchContainer').append(card);
        });
    
    })
    .catch(err => console.error(err));

  
  }
  
  document.querySelector('#search').addEventListener('click', search);
  $(document).on('click', (event) => {

    if ($(event.target).attr('id') == 'addToCart') {
        console.log('Add to cart button clicked');
        let title= $(event.target).attr('title');
        let price= $(event.target).attr('price');
        console.log(title);
            $.post("/api/cart", {
                BookTitle:title,
                BookPrice:4
            }, (cart_answer) => {
                console.log('cart_answer: ', cart_answer);
                window.location.href = "/cart";
            });
        

    }           
})
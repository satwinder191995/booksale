$(document).ready(function() {
// Get logged in user's data
    booksLoad() ;
});
function booksLoad (){
        fetch('/api/categories/classic')
        .then(response => response.json())
        .then(books => {
            console.log(books)
            $('#booksClassic').empty();

            // Create the book cards
            books.forEach((book) => {
                let card = `
            <div class="col-4 col-md-2">
                <img src="${book.bookimage}" class="card-img-top h-50" alt="${book.bookname} book image" />
                <div class="card-body" style="height:140px;">
                    <h6 class="card-title"><a href="#" class="modalTrigger" bookName="${book.bookname}">${book.bookname}</a></h5>
                    <p class="card-text h-sm-25">
                     Price: ${book.price}
                    </p>
                </div>
                <button type="button" class="btn btn-primary w-100" id="addToCart" title="${book.bookname}" price="${book.price}">
                Add to cart
              </button>
              </div>
            </div>
            `;
                $('#booksClassic').append(card);
            });
        
        })
        .catch(err => console.error(err));

                };
                fetch('/api/categories/drama')
                .then(response => response.json())
                .then(books => {
                    console.log(books)
                    $('#booksDrama').empty();
        
                    // Create the book cards
                    books.forEach((book) => {
                        let card = `
                    <div class="col-4 col-md-2">
                        <img src="${book.bookimage}" class="card-img-top h-50" alt="${book.bookname} book image" />
                        <div class="card-body" style="height:140px;">
                            <h6 class="card-title"><a href="#" class="modalTrigger" bookName="${book.bookname}">${book.bookname}</a></h5>
                            <p class="card-text">
                             Price: ${book.price}
                            </p>
                        </div>
                        <button type="button" class="btn btn-primary w-100" id="addToCart" title="${book.bookname}" price="${book.price}">
                        Add to cart
                      </button>
                      </div>
                    </div>
                    `;
                        $('#booksDrama').append(card);
                    });
                
                })
                .catch(err => console.error(err));
        
                fetch('/api/categories/romantic')
                .then(response => response.json())
                .then(books => {
                    console.log(books)
                    $('#booksRomance').empty();
        
                    // Create the book cards
                    books.forEach((book) => {
                        let card = `
                    <div class="col-4 col-md-2">
                        <img src="${book.bookimage}" class="card-img-top h-50" alt="${book.bookname} book image" />
                        <div class="card-body" style="height:140px;">
                            <h6 class="card-title"><a href="#" class="modalTrigger" bookName="${book.bookname}">${book.bookname}</a></h5>
                            <p class="card-text">
                             Price: ${book.price}
                            </p>
                        </div>
                        <button type="button" class="btn btn-primary w-100" id="addToCart" title="${book.bookname}" price="${book.price}">
                        Add to cart
                      </button>
                      </div>
                    </div>
                    `;
                        $('#booksRomance').append(card);
                    });
                
                })
                .catch(err => console.error(err));
        


                $(document).on('click', (event) => {

                if ($(event.target).attr('id') == 'addToCart') {
                    console.log('Add to cart button clicked');
                    let title= $(event.target).attr('title');
                    let price= $(event.target).attr('price');
                    console.log(title);
                        $.post("/api/cart", {
                            BookTitle: title,
                            BookPrice:price
                        }, (cart_answer) => {
                            console.log('cart_answer: ', cart_answer);
                            window.location.href = "/cart";
                        });
                    
        
                }           
            })
// ADD NEW BOOK
let add = document.querySelector('#add');
add.addEventListener('click', () => {
    let libraryArr = JSON.parse(localStorage.getItem('libraryArr'));
    if (libraryArr == null) {
        libraryArr = [];
    }
    let title = document.querySelector("#title").value
    let author = document.querySelector("#author").value
    let newBook = {
        "Title": title,
        "Author": author
    };
    libraryArr.push(newBook);
    localStorage.setItem("libraryArr", JSON.stringify(libraryArr));
    let booklist = document.querySelector('#book-list');
    
});

function printBooks() {
    let books = document.getElementById('book-section');
    let booklist = '<div class = "book-list">';
    let libraryArr = JSON.parse(localStorage.getItem('libraryArr'));
    for (let book =  0;
        book < libraryArr.length;
        book += booklist
        ) {
            const book = `<div class='book'>
                <p class='title'>${libraryArr[book].title}</p>
                <p class='author'>${libraryArr[book].author}</p>
                <button class='remove'>Remove</button>
                </div>`
            booklist += book;
        }
            booklist += '</div>';
           books.innerHTML = booklist;
}
printBooks();

// SHOW BOOKS ON THE PAGE
 
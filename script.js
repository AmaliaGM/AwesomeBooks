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
    ;
});

function printBooks() {
    let bookSection = document.getElementById('book-section');
    let libraryArr = JSON.parse(localStorage.getItem('libraryArr'));
    for (let i = 0; i < libraryArr.length; i++) {
        const book = `<div id="book${i+1}"class='book'>
                <p class='title'>${libraryArr[i].Title}</p>
                <p class='author'>${libraryArr[i].Author}</p>
                <button id="remove-book${i+1}" class='remove-btn'>Remove</button>
                </div>`
        bookSection.innerHTML += book;
    }
}
printBooks()
// let showBooks = document.querySelector('#show-books');
// showBooks.addEventListener('click', printBooks());





/*
function printBooks() {
    let books = document.getElementById('book-section');
    let booklist = '<div class = "book-list">';
    let libraryArr = JSON.parse(localStorage.getItem('libraryArr'));
    for (let book = 0; book < libraryArr.length; book++) {
        const newBook = `<div class='book'>
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
*/
// SHOW BOOKS ON THE PAGE

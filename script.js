// KEEP TRACK OF NUMBER OF BOOKS ADDED

function bookIDgenerator() {
    let previousID = JSON.parse(localStorage.getItem('bookIDgenerator'));
    let newID = previousID + 1;
    if (previousID == null) {
        previousID = 1;
        localStorage.setItem("bookIDgenerator", JSON.stringify(previousID));
        return previousID;
    }
    localStorage.setItem("bookIDgenerator", JSON.stringify(newID));
    return newID;
}

// ADD NEW BOOK
let add = document.querySelector('#add');
add.addEventListener('click', (event) => {
    let libraryArr = JSON.parse(localStorage.getItem('libraryArr'));
    if (libraryArr == null) {
        libraryArr = [];
    }
    let title = document.querySelector("#title").value
    let author = document.querySelector("#author").value
    let newBook = {
        ID: bookIDgenerator(),
        Title: title,
        Author: author
    };
    libraryArr.push(newBook);
    localStorage.setItem("libraryArr", JSON.stringify(libraryArr));
    let booklist = document.querySelector('#book-list');
});

// SHOW BOOKS ON THE PAGE
function printBooks() {
    let bookSection = document.getElementById('book-section');
    let libraryArr = JSON.parse(localStorage.getItem('libraryArr'));
    //try to use map
    for (let i = 0; i < libraryArr.length; i++) {
        const book = `<div id="book${i}"class='book'>
                <p class='title'>${libraryArr[i].Title}</p>
                <p class='author'>${libraryArr[i].Author}</p>
                <button id="${libraryArr[i].ID}" class='remove-btn'>Remove</button>
                </div>`
        bookSection.innerHTML += book;
    }
};
printBooks();

// REMOVE BOOK FROM LOCAL STORAGE
let removeButton = Array.from(document.querySelectorAll('.remove-btn'));
removeButton.forEach(function (remove) {
    remove.addEventListener('click', (event) => {
        let index = event.target.id
        let libraryArr = JSON.parse(localStorage.getItem("libraryArr"));
        libraryArr = libraryArr.filter((book) => {
            return book.ID != index
        })
        localStorage.setItem("libraryArr", JSON.stringify(libraryArr));
        clearBooks();
        printBooks();
    });
});

// CLEAR ALL BOOKS ON HTML TO PRINT AGAIN
function clearBooks() {
    let bookSection = document.getElementById('book-section');
    while (bookSection.firstChild) {
        bookSection.removeChild(bookSection.firstChild);
    }
};
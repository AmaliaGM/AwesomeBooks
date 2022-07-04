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

// SHOW BOOKS ON THE PAGE
function printBooks() {
    let bookSection = document.getElementById('book-section');
    let libraryArr = JSON.parse(localStorage.getItem('libraryArr'));
    for (let i = 0; i < libraryArr.length; i++) {
        const book = `<div id="book${i}"class='book'>
                <p class='title'>${libraryArr[i].Title}</p>
                <p class='author'>${libraryArr[i].Author}</p>
                <button id="remove-book${i}" class='remove-btn'>Remove</button>
                </div>`
        bookSection.innerHTML += book;
    }
}
printBooks()

// REMOVE BOOK
let book2 = document.getElementById('remove-book1');
let id = book2.id;
let i = id.charAt(id.length - 1);

let removeButton = document.querySelectorAll('.remove-btn')
window.addEventListener('click', (e) => {
    if (e === button) { }
});


book2.addEventListener('click', () => {
    let libraryArr = JSON.parse(localStorage.getItem("libraryArr"));
    localStorage.setItem("index-other", i);
    // const index = libraryArr.findIndex(item => item.Title === "");
    // localStorage.setItem("index", index);




    // newlibraryArr = newlibraryArr.filter(value, index, arr) {
    //     return index != i;
    // };
});


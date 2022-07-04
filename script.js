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
});


// SHOW BOOKS ON THE PAGE

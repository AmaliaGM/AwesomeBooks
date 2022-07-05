// KEEP TRACK OF NUMBER OF BOOKS ADDED

function bookIDgenerator() {
  let previousID = JSON.parse(localStorage.getItem('bookIDgenerator'));
  const newID = previousID + 1;
  if (previousID == null) {
    previousID = 1;
    localStorage.setItem('bookIDgenerator', JSON.stringify(previousID));
    return previousID;
  }
  localStorage.setItem('bookIDgenerator', JSON.stringify(newID));
  return newID;
}

// ADD NEW BOOK
const add = document.querySelector('#add');
add.addEventListener('click', () => {
  let libraryArr = JSON.parse(localStorage.getItem('libraryArr'));
  if (libraryArr == null) {
    libraryArr = [];
  }
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const newBook = {
    ID: bookIDgenerator(),
    Title: title,
    Author: author,
  };
  libraryArr.push(newBook);
  localStorage.setItem('libraryArr', JSON.stringify(libraryArr));
});

// SHOW BOOKS ON THE PAGE
function printBooks() {
  const bookSection = document.getElementById('book-section');
  const libraryArr = JSON.parse(localStorage.getItem('libraryArr'));
  // try to use map
  for (let i = 0; i < libraryArr.length; i += 1) {
    const book = `<div id="book${i}"class='book'>
                <p class='title'>${libraryArr[i].Title}</p>
                <p class='author'>${libraryArr[i].Author}</p>
                <button id="${libraryArr[i].ID}" class='remove-btn'>Remove</button>
                </div>`;
    bookSection.innerHTML += book;
  }
}
printBooks();

// CLEAR ALL BOOKS ON HTML TO PRINT AGAIN
function clearBooks() {
  const bookSection = document.getElementById('book-section');
  while (bookSection.firstChild) {
    bookSection.removeChild(bookSection.firstChild);
  }
}

// REMOVE BOOK FROM LOCAL STORAGE
const removeButton = Array.from(document.querySelectorAll('.remove-btn'));
removeButton.forEach((remove) => {
  remove.addEventListener('click', (event) => {
    const index = parseInt(event.target.id, 10);
    let libraryArr = JSON.parse(localStorage.getItem('libraryArr'));
    libraryArr = libraryArr.filter((book) => book.ID !== index);
    localStorage.setItem('libraryArr', JSON.stringify(libraryArr));
    clearBooks();
    printBooks();
    document.location.reload();
  });
});

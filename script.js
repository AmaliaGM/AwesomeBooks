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
class AddBook {
  constructor(ID, Title, Author) {
    this.ID = ID,
      this.Title = Title,
      this.Author = Author
  }
};


const add = document.querySelector('#add');
add.addEventListener('click', () => {
  let libraryArr = JSON.parse(localStorage.getItem('libraryArr'));
  if (libraryArr == null) {
    libraryArr = [];
  }
  const ID = bookIDgenerator();
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const newBook = new AddBook(ID, title, author);
  console.log(newBook);
  libraryArr.push(newBook);
  localStorage.setItem('libraryArr', JSON.stringify(libraryArr));
});

// SHOW BOOKS ON THE PAGE
function printBooks() {
  const bookList = document.getElementById('book-list');
  const libraryArr = JSON.parse(localStorage.getItem('libraryArr'));
  // try to use map
  for (let i = 0; i < libraryArr.length; i += 1) {
    const book = `<li id='book${i}'class='book'>
      <div class='book-info'>            
        <p class='title'>${libraryArr[i].Title}</p>
        <p> &nbsp by &nbsp </p> 
        <p class='author'>${libraryArr[i].Author}</p>
      </div>
      <button id="${libraryArr[i].ID}" class='remove-btn'>Remove</button>
      </li>`;
    bookList.innerHTML += book;
  }
}
printBooks();

// CLEAR ALL BOOKS ON HTML TO PRINT AGAIN
function clearBooks() {
  const bookList = document.getElementById('book-list');
  while (bookList.firstChild) {
    bookList.removeChild(bookList.firstChild);
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

 
/* /* function addBook() {
    let lybraryArr = JSON.parse(localStorage.getItem('library'));
    // if (lybraryArr == null) {
    //     lybraryArr = [];
    // }
    let title = document.querySelector("#title").value
    let author = document.querySelector("#author").value
    let newBook = {
        "Title": title,
        "Author": author
    };
    lybraryArr.push(newBook);
    localStorage.setItem("lybraryArr", JSON.stringify(lybraryArr)); 
} 

/* let add = document.querySelector('#add');
add.addEventListener('click', addBook); */


/*  let library = []
let title = document.querySelector("#title").value
    let author = document.querySelector("#author").value
let add = document.querySelector('#add');
add.addEventListener('click', (e) => {
    let library = JSON.parse(localStorage.getItem('library'));
    let newItem = {
       'Title': e.target.dataset.title,
        'Author': e.target.dataset.author,
    };
    library.push(newItem);
    localStorage.setItem('library', JSON.stringify(library));
}); 
 */


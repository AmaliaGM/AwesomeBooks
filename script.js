let library = [
    {
        Title: "Chicken soup for the soul",
        Author: "Jack Canfield",
    },
    {
        Title: "Green eggs and ham",
        Author: "Dr. Seuss",
    }
];
// console.log(library)
localStorage.setItem("library", JSON.stringify(library));

let add = document.querySelector('#add');
add.addEventListener('click', (e) => {
    let title = document.querySelector("#title").value
    let author = document.querySelector("#author").value
    let newItem = {
        Title: e.target.dataset.title,
        Author: e.target.dataset.author,
    };
    library.push(newItem);
    localStorage.setItem('library', JSON.stringify(title));
    localStorage.setItem('library', JSON.stringify(author));
});



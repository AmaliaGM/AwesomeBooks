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
add.addEventListener('click', () => {
    let title = document.querySelector("#title").value
    let author = document.querySelector("#author").value
    localStorage.setItem('Title', JSON.stringify(title));
    localStorage.setItem('Author', JSON.stringify(author));
});



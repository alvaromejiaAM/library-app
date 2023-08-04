function Book(author, title, pages, read){
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(){
    const tempData = new FormData(form);
    const obj =  new Book(tempData.get('author'), tempData.get('title'), tempData.get('pages'), tempData.get('read'));
    myLibrary.push(obj);
    displayLibrary(myLibrary);
}

function displayLibrary(library){
  const displayLibrary = document.querySelector('.library');
    let size = library.length;
    

    const book = document.createElement('div');
    book.classList = 'book';
    displayLibrary.appendChild(book);
}

let myLibrary = [];

const form = document.getElementById('addBook');
form.addEventListener('submit', (e)=> {
  e.preventDefault();
  addBookToLibrary();
})

document.querySelector('#btnAdd').addEventListener('click', ()=>{
  document.getElementById('myForm').style.display = "block";
});




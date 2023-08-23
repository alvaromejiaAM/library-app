 //constructor
function Book(author, title, pages, read){
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

//stores object into array
function addBookToLibrary(){ 
    const tempData = new FormData(form);
    const obj =  new Book(tempData.get('author'), tempData.get('title'), tempData.get('pages'), tempData.get('read'));
    myLibrary.push(obj);
    displayLibrary(myLibrary);
}

//user interface
function displayLibrary(library){ 
  const displayLibrary = document.querySelector('.library');
    let size = library.length - 1;
    const book = document.createElement('div');
    book.classList = size; //add to allow removing
    book.innerText = `${library[size].author}, ${library[size].title}, ${library[size].pages}, ${library[size].read}`;
    const btnRemove = document.createElement('button');
    btnRemove.classList.add("btnRemove");
    btnRemove.innerText = 'X';
    book.appendChild(btnRemove);
    displayLibrary.appendChild(book);
}

let myLibrary = [];

//gets data from form and resets
const form = document.getElementById('addBook');
form.addEventListener('submit', (e)=> {
  e.preventDefault();
  addBookToLibrary();
  form.reset();
  document.getElementById('myForm').style.display = "none";
});

//displays form when clicked
document.querySelector('#btnAdd').addEventListener('click', ()=>{ 
  document.getElementById('myForm').style.display = "block";
});
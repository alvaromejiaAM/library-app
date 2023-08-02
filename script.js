function Book(author, title, pages, read){
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(){
  const form = document.querySelector('form');
  form.addEventListener('submit', (e)=> {
    e.preventDefault();
    const tempData = new FormData(form);
    const obj = Object.fromEntries(tempData);
    myLibrary.push(obj);
    delete obj;
    displayLibrary(myLibrary);
  });
}

function displayLibrary(library){
  
}

let myLibrary = [];

document.querySelector('#btnAdd').addEventListener('click', ()=>{
  document.getElementById('myForm').style.display = "block";
});




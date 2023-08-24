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
    book.classList = `${library[size].title}`; //add to allow removing
    book.innerText = `Author: ${library[size].author} \nTitle: ${library[size].title} \nPages: ${library[size].pages} \nRead: ${library[size].read}`;
    
    const status = document.createElement('button');
    status.classList.add('btnStatus');
    status.innerText = 'Change Read Status'

    const btnRemove = document.createElement('button');
    btnRemove.classList.add("btnRemove");
    btnRemove.innerText = 'X';

    book.appendChild(status);
    book.appendChild(btnRemove);
    displayLibrary.appendChild(book);

    remove(library[size].title);
    changeRead(library[size].title);
}

//Change the read status of the book
function changeRead(pos){
  document.querySelectorAll('.library > div > .btnStatus').forEach(read =>{
    read.addEventListener('click', (e)=>{
      const objIndex = myLibrary.findIndex((obj) => obj.title === pos);
      if(objIndex > -1){
        const status = myLibrary[objIndex].read;
        if(status === 'Yes'){
          myLibrary[objIndex].read = 'No';
          displayLibrary(myLibrary[objIndex]);
        }
        else{
          myLibrary[objIndex].read = 'Yes';
          displayLibrary(myLibrary[objIndex]);
        }
      }
    });
  });
}

function remove(pos){ //on button click removes from myLibrary and user interface
  document.querySelectorAll('.library > div > .btnRemove').forEach(userBook => {
    userBook.addEventListener('click', (e)=>{
      e.target.parentNode.remove();
      const objIndex = myLibrary.findIndex((obj) => obj.title === pos);
      if(objIndex > -1){
        myLibrary.splice(objIndex,1);
      }
    });
  });
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


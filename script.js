 //Class
class Book{
  constructor(author, title, pages, read){
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
  }
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
    book.innerText = `Author: ${library[size].author} \nTitle: ${library[size].title} \nPages: ${library[size].pages}`;
    
    const status = document.createElement('button');
    status.classList.add('btnStatus');
    status.innerText = `Read: ${library[size].read}`;

    const btnRemove = document.createElement('button');
    btnRemove.classList.add("btnRemove");
    btnRemove.innerText = 'X';

    book.appendChild(status);
    book.appendChild(btnRemove);
    displayLibrary.appendChild(book);

    remove(library[size]);
    changeRead(library[size]);
}

//Change the read status of the book
function changeRead(pos){
  let status = document.querySelectorAll('.btnStatus')
  for(let i = 0; i < status.length; i++){
    status[i].addEventListener('click', (e)=>{
      e.stopImmediatePropagation(); //prevents bubbling
      const objIndex = myLibrary.findIndex((obj) => obj.title === pos.title);
      if(objIndex > -1){
        if(pos.read === 'Yes'){
          status[i].innerText = 'Read: No';
          myLibrary[objIndex].read = 'No';
        }
        else{
          status[i].innerText = 'Read: Yes';
          myLibrary[objIndex].read = 'Yes';
        }
      }
    })
  }
}

//on button click removes from myLibrary and user interface
function remove(pos){ 
  let destroy = document.querySelectorAll('.btnRemove');
  for(let i = 0; i < destroy.length; i++){
    destroy[i].addEventListener('click', (e)=>{
      e.stopImmediatePropagation(); //prevents bubbling
      const objIndex = myLibrary.findIndex((obj) => obj.title === pos.title);
      if(objIndex > -1){
        e.target.parentNode.remove();
        myLibrary.splice(objIndex,1);
      }
    });
  }

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


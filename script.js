function Book(){

}

function addBookToLibrary(){

}

function displayLibrary(library){
  const displayLibrary = document.querySelector('.library');
  for(i = 0; i < library.length; i++){
    const book = document.createElement('div');
    book.classList = 'book';
    book.innerText = library[i];
    displayLibrary.appendChild(book);
  }
}

let userLibrary = ["harry potter", "me", "lorem20"];
displayLibrary(userLibrary);



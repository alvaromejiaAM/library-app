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

let userLibrary = 
  ["harry potter", "1984", "The Great Gatsby",
   "To Kill a Mockingbird", "Wuthering heights", "Catch-22"];
   
displayLibrary(userLibrary);



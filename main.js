const myLibrary = [];

function Book(author, title, pages, read) {
    this.id = crypto.randomUUID();
    this.author = author
    this.title = title
    this.pages = pages
    this.read = read

}

function addBookToLibrary() {
 
  let book1 = new Book(
    `Elson`,
    `The power of the subconscious mind`,
    `295 pages`,
    `not read yet`
  );
  myLibrary.push(book1);
}

addBookToLibrary()
console.log(myLibrary)

let addBookBtn = document.querySelector(`.addBookBtn`)
console.log(addBookBtn)
let dialog = document.querySelector(`dialog`)
let submit = document.querySelector(`.submiit`)
let form = document.querySelector(`form`)
let formInput = document.querySelectorAll(`input`)

addBookBtn.addEventListener(`click`, function(){
   dialog.showModal()


})

form.addEventListener(`submit`, function(event) {
    event.preventDefault()
    formInput.forEach(input => {
        console.log(input.value)
    });
   dialog.close()
})


const myLibrary = [];

function Book(author, title, pages) {
  this.id = crypto.randomUUID();

  this.author = author
  this.title = title
  this.pages = pages
}

let form = document.querySelector(`.form-js`)
let author = document.querySelector( `.author-js`)
let title = document.querySelector(`.title-js`)
let pages = document.querySelector(`.pages-js`)
let btnSubmit = document.querySelector(`.submit-js`)
let cardSection = document.querySelector(`.cardSection`)
let card = document.querySelector(`.card`)



function addBookToLibrary() {

  form.addEventListener(`submit`, function(e){
    e.preventDefault()

    let authorValue = author.value
    let titleValue = title.value
    let pagesValue = pages.value
  
    let newBook = new Book(`${authorValue}`, `${titleValue}`, `${pagesValue}`)
    myLibrary.push(newBook)

    for (let i = 0; i < myLibrary.length; i++) {

      let createBook = document.createElement(`div`)
      createBook.classList.add(`card`)
      createBook.innerHTML = `
              <p>Author : ${authorValue}</p>
               <p>Title : ${titleValue}</p>
               <P>Pages : ${pagesValue}</P>
                <label for="read">Read yet?</label>
                <input type="checkbox" name="read" id="read">
                            

                
      `;
      cardSection.appendChild(createBook)

      let btnDelete = document.createElement(`button`)
      btnDelete.classList.add(`delete-js`)
      btnDelete.innerText = `Delete`
      createBook.appendChild(btnDelete)
      btnDelete.addEventListener(`click`, function() {
        createBook.remove()
      })
     
     
     
      myLibrary = [];
      
      
    }
    
  }) 
 
}

addBookToLibrary()













export class UIBookList {

    constructor() { }
   
    getFocus = (e) => {
    
        if (event.type === "focusin") {
  
            if (e.target.matches("input")) {
                e.target.classList.add("focus-effect")
            } 
        }

        else {
            e.target.classList.remove("focus-effect");
        }
    }

   

    validateInputFields = (args) =>
    {
        let result = false;

        args.forEach((input) => { 
            if (input.value === "")
            {
                result = true;
                
            }
        })
        return result;
    }

   
    createMessage = (message,background) =>{
       const infoContainer = document.createElement("div");
        const text = document.createElement("p");
        text.textContent = message;
        
        infoContainer.classList.add("info");
        infoContainer.style.backgroundColor = background;
        infoContainer.appendChild(text);
        
        return infoContainer;
   }

    emptyFieldMessageAlert = () =>{
        
        const messageContainer = document.querySelector(".message-container");
         const message  = this.createMessage("Please Fill out empty Fields","red")

       messageContainer.style.display = "flex";
       messageContainer.appendChild(message);

    }

    addBookAlert = () => {
        
        const messageContainer = document.querySelector(".message-container");
        const message = this.createMessage("Book Added", "green")
        
        this.clearOutAlertContainer();
        
       messageContainer.style.display = "flex";
        messageContainer.appendChild(message); 
        
        setTimeout(() => {
            messageContainer.innerHTML = ""
        }, 3000);
    }

    removeMessageAlert = () =>{
       document.querySelector(".message-container").style.display = "none";  
    }

    clearOutFields = () => {
        const inputs = Array.from(document.querySelectorAll("input")) 
        inputs.forEach((input) => input.value = "")
    }

    clearOutAlertContainer = () => {
       document.querySelector(".message-container").innerHTML = "";
    }

    

}


export class Book{
   
    constructor(){
       
    }
    
    addBook = (...args) =>{
      
       const [title,author,isbn] = [...args]; // destructuring the array
       
       const objBook = {
            bookTitle: title,
            bookAuthor: author,
            bookIsbn:isbn
        }
       
        localStorage.setItem(title, JSON.stringify(objBook)); // save the object in the local storage
        const bookItem = document.createElement("div");
        bookItem.classList.add("book-item","grid");
        bookItem.innerHTML= `
                            <h3> ${objBook.bookTitle} </h3>
                            <h3> ${objBook.bookAuthor} </h3>
                            <h3> ${objBook.bookIsbn} </h3>
                            <button class="delete-btn"> delete</button>
                        `
        document.querySelector(".data-grid-result").appendChild(bookItem); 
     // console.log( JSON.parse(localStorage.getItem(title)));
    }

    deleteBook = (e) =>
    {
        if (e.target.classList.contains("delete-btn"))
        {
            const bookItem = e.target.closest("div");
            const keyValueLocalStorage = bookItem.firstElementChild.innerText;
            
            localStorage.removeItem(keyValueLocalStorage);
            document.querySelector(".data-grid-result").removeChild(bookItem);
        
        }
        
    }
}
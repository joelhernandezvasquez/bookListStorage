
import { UIBookList,Book } from "./classes.js";

const formContainer = document.querySelector(".form-container");
const btnSubmit = document.querySelector("#btn");
const gridResult = document.querySelector(".data-grid-result");

const forminput = new UIBookList();
const book = new Book();




const validateFields = () => {
 
  if(!forminput.validateInputFields(Array.from(document.querySelectorAll("input"))))
  {
    forminput.removeMessageAlert();
    
    book.addBook(document.getElementById("title").value, document.getElementById("Author").value, document.getElementById("isbn").value)
    forminput.addBookAlert();
    forminput.clearOutFields();
  }
  else{
    
     if(document.querySelector(".message-container").childElementCount == 0)
        forminput.emptyFieldMessageAlert();
  }
}

formContainer.addEventListener("focusin", forminput.getFocus);
formContainer.addEventListener("focusout", forminput.getFocus);
btnSubmit.addEventListener("click", validateFields)
gridResult.addEventListener("click",book.deleteBook)






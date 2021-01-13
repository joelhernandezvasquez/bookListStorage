
import { UIBookList } from "./classes.js";

const formContainer = document.querySelector(".form-container");
const btnSubmit = document.querySelector("#btn");

const forminput = new UIBookList();




const validateFields = () => {
  console.log("hello")
  forminput.validateInputFields(Array.from(document.querySelectorAll("input")));
}

formContainer.addEventListener("focusin", forminput.getFocus);
formContainer.addEventListener("focusout", forminput.getFocus);
btnSubmit.addEventListener("click",validateFields)





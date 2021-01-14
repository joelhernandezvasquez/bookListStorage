

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

   
    emptyFieldMessageAlert = () =>{
       
        const messageContainer = document.querySelector(".message-container");
       const alert = document.createElement("div");
       const text = document.createElement("p");

       text.textContent = "Please fill out all Empty Fields";
       text.classList.add(".message");
       alert.classList.add("alert");
       alert.appendChild(text);

        
       messageContainer.style.display = "flex";
       messageContainer.appendChild(alert);

    }

    removeMessageAlert = () =>{
       document.querySelector(".message-container").style.display = "none";  
    }

}


export class Book{
   
    constructor(){
       
    }
    
    addBook = (...args) =>{
     
       const [title] = [...args]; // destructuring the array
        const objBook = {...args}; // creating an object out of the array
       
      
       localStorage.setItem(title,JSON.stringify(objBook));
      console.log( JSON.parse(localStorage.getItem(title)));
        
    }
}


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
       

        args.forEach((input) => { 
            if (input.value === "")
            {
                alert();
            }
        })
    }

}

import printHomePage from "./printHomePage.js";

//vy för felmeddelande
export default function printWrongPage () { 

    content.innerHTML = "Sorry, invalid username and/or password! ";
    
    let cancelButton = document.createElement("button");
    cancelButton.innerText = "Cancel"
    cancelButton.addEventListener("click", () => {
        printHomePage(); 
    });
    content.appendChild(cancelButton);
}
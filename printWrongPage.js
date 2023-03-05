import printHomePage from "./printHomePage.js";

//vy för felmeddelande
export default function printWrongPage () { 
    content.innerHTML = " ";

    //H1
    let logo = document.createElement("h1");
    logo.innerHTML = "Doglist";
    logo.id = "logo";
    content.appendChild(logo);

    let invalidText = document.createElement("p");
    invalidText.innerText = `Sorry, invalid username and/or password!`;
    invalidText.id = "invalidText"
    content.appendChild(invalidText);
    
    let cancelButton = document.createElement("button");
    cancelButton.innerText = "Cancel";
    cancelButton.id = "cancelBtn";
    cancelButton.addEventListener("click", () => {
        printHomePage(); 
    });
    content.appendChild(cancelButton);
}
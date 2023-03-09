import printHomePage from "./printHomePage.js";

export default function printWrongPage () { 
    content.innerHTML = " ";
    showToDo.innerHTML = " ";

    let logo = document.createElement("h1");
    logo.innerHTML = "Doglist";
    logo.id = "logo";
    content.appendChild(logo);

    let invalidText = document.createElement("p");
    invalidText.innerText = `Sorry, invalid username and/or password!`;
    invalidText.id = "invalidText"
    content.appendChild(invalidText);

    let divTextBox = document.createElement("div");
    divTextBox.id = "divTextBox"
    content.appendChild(divTextBox);

    const dogPicHome = new Image(130, 200);
    dogPicHome.src= "./img/dogHome.png"
    dogPicHome.id = "dogPicHome";
    footer.appendChild(dogPicHome);
    
    let cancelButton = document.createElement("button");
    cancelButton.innerText = "Cancel";
    cancelButton.id = "cancelBtn";
    cancelButton.addEventListener("click", () => {
        printHomePage(); 
    });
    content.appendChild(cancelButton);
}
import printHomePage from "./printHomePage.js";

export default function printWrongPage () { 
    content.innerHTML = " ";

    let logo = document.createElement("h1");
    logo.innerHTML = "Doglist";
    logo.id = "logo";
    content.appendChild(logo);

    let invalidText = document.createElement("p");
    invalidText.innerText = `Sorry, invalid username and/or password!`;
    invalidText.id = "invalidText"
    content.appendChild(invalidText);

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
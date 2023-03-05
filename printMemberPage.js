const dogPic = document.getElementById("dogPic")

import printHomePage from "./printHomePage.js";
import printToDoList from "./printTodoList.js";

export default function printMemberPage () { 
    header.innerHTML = " ";
    content.innerHTML = " ";
    footer.innerHTML = " ";

    let name = JSON.parse(localStorage.getItem("userIsLoggedIn"));

    let welcomeText = document.createElement("p");
    welcomeText.innerText = `Voff and welcome ${name} to your member page!`;
    welcomeText.id = "welcomeText"
    content.appendChild(welcomeText);

    let todoText = document.createElement("p");
    todoText.innerText = `Create your own ToDo list`;
    todoText.id = "todoText"
    content.appendChild(todoText);

    const dogPicMember = new Image(130, 190);
    dogPicMember.src= "./img/dogMember.png"
    dogPicMember.id = "dogPicMember";
    footer.appendChild(dogPicMember);
    
    printToDoList ();
    
    //Log out Btn 
    let logOutButton = document.createElement("button");
    logOutButton.innerText = "Log out"
    logOutButton.id = "logOutBtn";
    header.appendChild(logOutButton);

    //radera inlogg ur ls
    logOutButton.addEventListener("click", () => {
        localStorage.removeItem("userIsLoggedIn");
        printHomePage(); 
    });
}
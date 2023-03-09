const dogPic = document.getElementById("dogPic")

import printHomePage from "./printHomePage.js";
import printToDoList from "./printTodoList.js";

export default function printMemberPage () { 
    header.innerHTML = " ";
    content.innerHTML = " ";
    showToDo.innerHTML = " ";
    footer.innerHTML = " ";

    let logo = document.createElement("h1");
    logo.innerHTML = "Doglist";
    logo.id = "logo";
    content.appendChild(logo);

    let name = JSON.parse(localStorage.getItem("userIsLoggedIn"));
    let welcomeText = document.createElement("p");
    welcomeText.innerText = `Voff and welcome ${name} to your member page!`;
    welcomeText.id = "welcomeText"
    content.appendChild(welcomeText);

    let todoText = document.createElement("p");
    todoText.innerText = `Create your own to-do list by entering tasks below`;
    todoText.id = "todoText"
    content.appendChild(todoText);

    let todoTextDel = document.createElement("p");
    todoTextDel.innerText = `To delete a task, click on it`;
    todoTextDel.id = "todoTextDel"
    content.appendChild(todoTextDel);

    const dogPicMember = new Image(130, 190);
    dogPicMember.src= "./img/dogMember.png"
    dogPicMember.id = "dogPicMember";
    footer.appendChild(dogPicMember);
    
    printToDoList ();
    
    let logOutButton = document.createElement("button");
    logOutButton.innerText = "Log out"
    logOutButton.id = "logOutBtn";
    header.appendChild(logOutButton);

    logOutButton.addEventListener("click", () => {
        localStorage.removeItem("userIsLoggedIn");
        printHomePage(); 
    });
}
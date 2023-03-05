const dogPic = document.getElementById("dogPic")

import printMemberPage from "./printMemberPage.js";
import createNewMember from "./createNewMember.js";
import printWrongPage from "./printWrongPage.js";

export default function printHomePage () { 
    header.innerHTML = " ";
    content.innerHTML = " ";
    showToDo.innerHTML = " ";
    footer.innerHTML = " ";

    let logo = document.createElement("h1");
    logo.innerHTML = "Doglist";
    logo.id = "logo";
    content.appendChild(logo);

    let labelUsername = document.createElement("Label");
    labelUsername.id = "labelUsername";
    labelUsername.innerText = "Username: ";
    header.appendChild(labelUsername);
 
    let inputUserName = document.createElement("input");
    inputUserName.id = "inputUserName";
    inputUserName.type = "text";
    header.appendChild(inputUserName);
 
    let labelPassword = document.createElement("Label");
    labelPassword.id = "labelPassword";
    labelPassword.innerText = "Password: ";
    header.appendChild(labelPassword);

    let inputPassword = document.createElement("input");
    inputPassword.id = "inputPassword";
    inputPassword.type = "password";
    header.appendChild(inputPassword);

    let logInBtn = document.createElement("button");
    logInBtn.innerText = "Log in"
    logInBtn.id = "logInBtn";
    header.appendChild(logInBtn);
 
    var newMemberBtn = document.createElement("button");
    newMemberBtn.innerText = "New Member?";
    newMemberBtn.id = "newMemberBtn";
    content.appendChild(newMemberBtn);

    let homeHelloText = document.createElement("p");
    homeHelloText.innerHTML = "Hello!";
    homeHelloText.id = "homeHelloText";
    content.appendChild(homeHelloText);

    let homeText = document.createElement("p");
    homeText.innerHTML = "If you are a member you know what to do, if not please sign up.";
    homeText.id = "homeText";
    content.appendChild(homeText);

    const dogPicHome = new Image(130, 200);
    dogPicHome.src= "./img/dogHome.png"
    dogPicHome.id = "dogPicHome";
    footer.appendChild(dogPicHome);

    logInBtn.addEventListener("click", () =>  {   

        let users = JSON.parse(localStorage.getItem("users"));
        let userN = users.find(user => user.userName === inputUserName.value);
        let userP = users.find(user => user.passWord === inputPassword.value);
        
         //OBS alla kan logga in m varadnras lösen o tvärtom!
        
        if (userN && userP) { 
            
            let userIsLoggedIn = inputUserName.value;
            localStorage.setItem("userIsLoggedIn", JSON.stringify(userIsLoggedIn)); 
            console.log("userIsLoggedIn", userIsLoggedIn)
            printMemberPage(); 
        }
        else  {
            printWrongPage (); 
        }  
    });  
    newMemberBtn.addEventListener("click", () =>  { 
        createNewMember ();
    });
}
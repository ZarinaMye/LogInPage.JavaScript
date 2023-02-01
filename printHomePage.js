import printMemberPage from "./printMemberPage.js";
import createNewMember from "./createNewMember.js";
import printWrongPage from "./printWrongPage.js";

//vy för ut-loggad
export default function printHomePage () { 
    header.innerHTML = " ";
    content.innerHTML = " ";
    footer.innerHTML = " ";

    //Label username
    let labelUsername = document.createElement("Label");
    labelUsername.id = "labelUsername";
    labelUsername.innerText = "Username: ";
    header.appendChild(labelUsername);
    //Input username
    let inputUserName = document.createElement("input");
    inputUserName.id = "inputUserName";
    inputUserName.type = "text";
    header.appendChild(inputUserName);
    //Label password
    let labelPassword = document.createElement("Label");
    labelPassword.id = "labelPassword";
    labelPassword.innerText = "Password: ";
    header.appendChild(labelPassword);
    //Input password
    let inputPassword = document.createElement("input");
    inputPassword.id = "inputPassword";
    inputPassword.type = "password";
    header.appendChild(inputPassword);
    //LogIn Btn
    let logInBtn = document.createElement("button");
    logInBtn.innerText = "Log in"
    logInBtn.id = "logInBtn";
    header.appendChild(logInBtn);
    //Create new user 
    var newMemberBtn = document.createElement("button");
    newMemberBtn.innerText = "New Member?";
    newMemberBtn.id = "newMemberBtn";
    header.appendChild(newMemberBtn);

    content.innerHTML = "Hello! <br> If you are a member you know what to do, if not please sign up.";
    
    logInBtn.addEventListener("click", () =>  {   

        let users = JSON.parse(localStorage.getItem("users"));
        let user = users.find(user => user.userName === inputUserName.value); //|| newUserNameInput.value);// && user.passWord === inputPassWord.value || newPassWordInput.value);
         //kolla password också..!!
        
        if (user) { 
            
            let userIsLoggedIn = inputUserName.value; //|| newUserNameInput.value;
            localStorage.setItem("userIsLoggedIn", JSON.stringify(userIsLoggedIn)); 
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
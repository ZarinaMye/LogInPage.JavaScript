import printHomePage from "./printHomePage.js";

//vy för att skapa ny användare
export default function createNewMember () {
    header.innerHTML = " ";
    content.innerHTML = " ";
    footer.innerHTML = " ";

    //Label create username
    let labelNewUsername = document.createElement("Label");
    labelNewUsername.id = "labelUsername";
    labelNewUsername.innerText = "Choose a username: ";
    content.appendChild(labelNewUsername);
    //Input new username
    let inputNewUserName = document.createElement("input");
    inputNewUserName.id = "inputNewUserName";
    inputNewUserName.type = "text";
    content.appendChild(inputNewUserName);
    //Label create password
    let labelNewPassword = document.createElement("Label");
    labelNewPassword.id = "labelNewPassword";
    labelNewPassword.innerText = "Choose a password: ";
    content.appendChild(labelNewPassword);
    //Input password
    let inputNewPassword = document.createElement("input");
    inputNewPassword.id = "inputNewPassword";
    inputNewPassword.type = "password";
    content.appendChild(inputNewPassword);
    //LogIn Btn
    let saveNewUserBtn = document.createElement("button");
    saveNewUserBtn.innerText = "Save"
    saveNewUserBtn.id = "saveNewUserBtn";
    content.appendChild(saveNewUserBtn);
    //Cancel Btn
    let cancelButton = document.createElement("button");
    cancelButton.innerText = "Cancel"
    content.appendChild(cancelButton);
    cancelButton.addEventListener("click", () => {
        printHomePage(); 
    });

    //skapa ny användare spars i ls   
    saveNewUserBtn.addEventListener("click", () => { 
        //hämta
        let users = JSON.parse(localStorage.getItem("users")); 
        let validNewInput = inputNewPassword;
        if (validNewInput.length >5 && validNewInput.length <21 ) { // != users.passWord) {
                
            //ändra 
            let newMember = {    
                userId: users.length +1,
                userName: inputNewUserName.value,
                passWord: inputNewPassword.value
            } 
            
            //push o spara
            users.push(newMember); 
            localStorage.setItem("users", JSON.stringify(users)); 
            {alert("Your username and password have been saved, please log in")};
            printHomePage(); 
    
        } else {
            {alert("Your password must be between 6 to 20 characters")}; 
            printHomePage(); 
        }
    });    
}

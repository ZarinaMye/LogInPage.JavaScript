import printHomePage from "./printHomePage.js";

export default function createNewMember () {
    header.innerHTML = " ";
    content.innerHTML = " ";
    footer.innerHTML = " ";

    let logo = document.createElement("h1");
    logo.innerHTML = "Doglist";
    logo.id = "logo";
    content.appendChild(logo);

    let labelNewUsername = document.createElement("Label");
    labelNewUsername.id = "labelNewUsername";
    labelNewUsername.innerText = "Choose a username: ";
    content.appendChild(labelNewUsername);
  
    let inputNewUserName = document.createElement("input");
    inputNewUserName.id = "inputNewUserName";
    inputNewUserName.type = "text";
    content.appendChild(inputNewUserName);
   
    let labelNewPassword = document.createElement("Label");
    labelNewPassword.id = "labelNewPassword";
    labelNewPassword.innerText = "Choose a password: ";
    content.appendChild(labelNewPassword);
 
    let inputNewPassword = document.createElement("input");
    inputNewPassword.id = "inputNewPassword";
    inputNewPassword.type = "text";
    content.appendChild(inputNewPassword);
    
    let saveNewUserBtn = document.createElement("button");
    saveNewUserBtn.innerText = "Save"
    saveNewUserBtn.id = "saveNewUserBtn";
    content.appendChild(saveNewUserBtn);

    const dogPicHome = new Image(130, 200);
    dogPicHome.src= "./img/dogHome.png"
    dogPicHome.id = "dogPicHome";
    footer.appendChild(dogPicHome);

    let cancelButton = document.createElement("button");
    cancelButton.innerText = "Cancel"
    cancelButton.id ="cancelButton";
    content.appendChild(cancelButton);

    cancelButton.addEventListener("click", () => {
        printHomePage(); 
    });

    //skapa ny användare spars i ls   
    saveNewUserBtn.addEventListener("click", () => { 
        //hämta
        let users = JSON.parse(localStorage.getItem("users")); 
        let validNewInput = inputNewPassword;
        if (validNewInput.value.length >5 && validNewInput.value.length <21 ) { 
                
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
    
        /* } else if (validNewInput.value === users.passWord ){
            {alert("Your are already a member, please log in")}; 
            printHomePage();  */

        } else {
            {alert("Your password must be between 6 to 20 characters")}; 
            printHomePage(); 
        }
    });    
}

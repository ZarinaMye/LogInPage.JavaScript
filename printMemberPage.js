import printHomePage from "./printHomePage.js";

export default function printMemberPage () { 
    header.innerHTML = " ";
    content.innerHTML = " ";
    footer.innerHTML = " ";

    let name = JSON.parse(localStorage.getItem("userIsLoggedIn"));
    content.innerText = `Voff and welcome ${name} to your member page!`;
    
    //Log out Btn 
    let logOutButton = document.createElement("button");
    logOutButton.innerText = "Log out"
    header.appendChild(logOutButton);

    //radera inlogg ur ls
    logOutButton.addEventListener("click", () => {
        localStorage.removeItem("userIsLoggedIn");
        printHomePage();
        /* let image = document.getElementById("changeDogPic");
        if (image.src.match("dogMember")) {
          image.src = "./img/dogHome.png";
        }
        else {
          image.src = "./img/dogMember.png";
        } */
    });
}
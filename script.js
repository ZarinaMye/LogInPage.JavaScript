const header = document.getElementById("header")
const content = document.getElementById("content")
const footer = document.getElementById("footer")

import printMemberPage from "./printMemberPage.js";
import printHomePage from "./printHomePage.js";
 
if (localStorage.getItem("users")) {
} else {
   let users = [
   {userId:1, userName: "janne", passWord: "test",},
   {userId:2, userName: "Scooby-Doo", passWord: "snacks",},
   {userId:3, userName: "Offie", passWord: "cucumber4Ever",},
   {userId:4, userName: "MollanThePinscher", passWord: "1234",},
   {userId:5, userName: "Pluto", passWord: "H8piff&puff",},
   {userId:6, userName: "Lajka", passWord: "Sputnik2",},
   ];
 localStorage.setItem("users", JSON.stringify(users));
} 

//kolla om nån är inloggad
if (localStorage.getItem("userIsLoggedIn")) { 
    printMemberPage();
} else {
    printHomePage();
} 








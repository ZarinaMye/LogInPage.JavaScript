const showToDo = document.getElementById("showToDo")

export default function printToDoList() {
    
    //måste skapa en array? ell nått med alla todolist i..
    
    let toDoSheet = []; //array dit allt vi skriver ska sparas
 
    if (!localStorage.getItem("toDoSheet")) {
        let newToDoPost = toDoSheet;
        localStorage.setItem("toDoSheet", JSON.stringify(toDoSheet));
        console.log("we have ls");
    }
    else {
        console.log("ls already exists");
    }    

    //kolla om något dagboksinlägg finns
    if (localStorage.getItem(toDoSheet)); { 
        printToDo();
    }  

    let headline = document.createElement("h1");
    headline.id = "ToDo"; 
    headline.innerText = "To Do";
    content.appendChild(headline);

    let inputToDo = document.createElement("input"); 
    inputToDo.type = "text";
    inputToDo.id ="inputToDo";
    content.appendChild(inputToDo);

    let saveToDoBtn = document.createElement("button"); 
    saveToDoBtn.innerText = "Save new task";
    saveToDoBtn.id = "saveToDoBtn";
    content.appendChild(saveToDoBtn);

    saveToDoBtn.addEventListener("click", () => {

        let toDoSheet = JSON.parse(localStorage.getItem("toDoSheet")); //Hämta
   
        let newToDoPost = {  
            id: toDoSheet.length +1,
            toDoTask: inputToDo.value 
        }
    
        toDoSheet.push(newToDoPost); //Ändra
        localStorage.setItem("toDoSheet", JSON.stringify(toDoSheet));
        //Spar object arroy till stäng i ls

        printToDo();
    })

    function printToDo() {  
        showToDo.innerHTML = " "; 

        let toDoSheet = JSON.parse(localStorage.getItem("toDoSheet")); //Hämta
   
        toDoSheet.map(todo => {
             
            let toDoBox = document.createElement("div"); 
            toDoBox.style.backgroundColor = "rgb(5, 36, 5)";
            toDoBox.style.boxShadow = "3px 3px 5px rgb(167, 163, 163, 0.5)"; 
            toDoBox.id = todo.id;
            toDoBox.innerHTML ="<li id="+ todo.id +">" + todo.toDoTask + "</li>";
            showToDo.appendChild(toDoBox) 
        })
    } 

    showToDo.addEventListener("click", (event) => { //callback funktion, ta bort todo item
        //console.log("click", event.target.id);

        //Hämta
        let toDoSheet = JSON.parse(localStorage.getItem("toDoSheet")); 

        //Ändra mha Filter (filterar så det som Inte (!==) stämmer sparas, resten tas bort)
        toDoSheet = toDoSheet.filter(newToDoPost => newToDoPost.id != event.target.id)
    
        //Spara
        localStorage.setItem("toDoSheet", JSON.stringify(toDoSheet));

        printToDo();
    })

}
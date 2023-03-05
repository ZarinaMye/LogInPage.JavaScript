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
   
        let newToDoPost = {   //objectet som ska sparas i arrayen, som då blir objectarray
            id: toDoSheet.length +1,
            toDoTask: inputToDo.value //ikon: contentInput.value//en ikon för att ta bort KVAR ATT FIXA!!
        }
    
        toDoSheet.push(newToDoPost); //Ändra
        localStorage.setItem("toDoSheet", JSON.stringify(toDoSheet));
        //Spar object arroy till stäng i ls

        printToDo();
    })


    function printToDo() {  //render funktion (från react)  //För att printa på sida 
        showToDo.innerHTML = " "; //om vi vill tömma sidan först...

        let toDoSheet = JSON.parse(localStorage.getItem("toDoSheet")); //Hämta
   
        toDoSheet.map(todo => {
             //skapa element
            let toDoBox = document.createElement("ul"); // om du vill skapa komplicerat, adjecentHTML bra om bara en enkel rad ska in i doc
            //ge elemenetet attribut
            //toDoBox.style.border = "1px solid black"; //diaryBox.claslist ="namnClass" för att styla i css, #namnClass
            //toDoBox.style.padding = "15px";
            //toDoBox.style.marginLeft = "460px";
                        
            toDoBox.id = todo.id;
            toDoBox.innerHTML ="<li id="+ todo.id +">" + todo.toDoTask + "</li>";
            showToDo.appendChild(toDoBox) // För att skicka ut, raden ovan, på sidan
        })
    } 

    showToDo.addEventListener("click", (event) => { //callback funktion, ta bort todo item
        //console.log("click", event.target.id);

        //Hämta
        let toDoSheet = JSON.parse(localStorage.getItem("toDoSheet")); 

        //Ändra mha Filter (filterar så det som Inte (!==) stämmer sparas, resten tas bort)
        toDoSheet = toDoSheet.filter(newToDoPost => newToDoPost.id != event.target.id)
        //console.log("toDoSheet after filter", toDoSheet);
    
        //Spara
        localStorage.setItem("toDoSheet", JSON.stringify(toDoSheet));

        printToDo();
    })

}
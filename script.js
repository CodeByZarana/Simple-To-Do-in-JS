const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container")

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li"); //creating a list entry
        li.innerHTML = inputBox.value; //storing the list value
        listContainer.appendChild(li); //adding the li to ul
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("check"); //if list element is clicked it will check it out
    }
    else if(e.target.tagName === "SPAN"){ //if the span which has the cross is clicked, it will be removed
        e.target.parentElement.remove(); 
    }
}, false);
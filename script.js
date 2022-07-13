tasks = [];
var addButtonEl = document.querySelector("#add-task");
let input;
//Add current date to the top of the page using momentjs
const date = document.getElementById("date")
const m = moment()
console.log(m.format("MMMM Do YYYY, hh:mm:ss A"));
const NowMoment = moment(); 
const eDate = document.getElementById('date');
 eDate.innerHTML = NowMoment.format("MMMM Do YYYY, hh:mm:ss A");
//startTime (hh:mm A)
//endTime (hh:mm A)
//Add button on task section

var createTaskAction = function(input) {
    console.log ("input is here");
    var actionContainerEl = document.createElement('div');
    actionContainerEl.className = "task-actions;"


var addButtonEl = document.createElement("button")
addButtonEl.textContent.content = "add";
addButtonEl.className = "btn add-btn";
addButtonEl.setAttribute("data-task-id", input);
actionContainerEl.appendChild(addButtonEl);
}
 //make event column editable
 var addButtonHandler = function (event){
    var targetEl = event.target;

    if(targetEl.matches ("btn")) {
        console.log ("input", targetEl);
    }
 }

 addButtonEl.addEventListener("click", add);
 

//activate Save button
//store data in local storage
//color code columns based on past, present, future time
//scroll down feature


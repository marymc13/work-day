tasks = [];
var addButtonEl = document.querySelector("#input");
let input;
var hours = [9,10,11,12,1,2,3,4,5];
//Add current date to the top of the page using momentjs
const date = document.getElementById("date")
const m = moment()
console.log(m.format("MMMM Do YYYY, hh:mm:ss A"));
const NowMoment = moment(); 
const eDate = document.getElementById('date');
 eDate.innerHTML = NowMoment.format("MMMM Do YYYY, hh:mm:ss A");
//startTime (hh:mm A)
//endTime (hh:mm A)

 //Add Button on task Section
 $(document).ready(function(){
    $(".btn").click(function(){
      var addTask = document.querySelector("input");
      console.log("addTask");
      saveTasks();
    }) 
 })
var saveTasks = function() {
    localStorage.getItem("input", JSON.stringify(input));
}
 //Make Task editable

//activate Save button
//store data in local storage
//color code columns based on past, present, future time
//scroll down feature


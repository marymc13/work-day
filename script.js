//Add current date to the top of the page using momentjs
const date = document.getElementById("date")
const m = moment()
console.log(m.format("MMMM Do YYYY, hh:mm:ss A"));
const NowMoment = moment(); 
const eDate = document.getElementById('date');
 eDate.innerHTML = NowMoment.format("MMMM Do YYYY, hh:mm:ss A");

 //make event column editable
 $(".list-group").on("click", "col-6", function() {
  console.log(this);
 })
//activate Save button
//store data in local storage
//color code columns based on past, present, future time
//scroll down feature


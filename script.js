                           tasks = [];
var addButtonEl = document.querySelector("#input");

var hours = [9,10,11,12,1,2,3,4,5];
//Add current date to the top of the page using momentjs
const date = document.getElementById("date")
const m = moment()
console.log(m.format("MMMM Do YYYY, hh:mm:ss A"));
const NowMoment = moment(); 
const eDate = document.getElementById('date');
 eDate.innerHTML = NowMoment.format("MMMM Do YYYY, hh:mm:ss A");

 //activate Save button
 $(document).ready(function(){
    $(".btn").click(function(e){
      e.preventDefault()
     var data = (e.target.getAttribute("data-id"));
     console.log(data)
      var input = document.querySelectorAll("input")
     console.log(input)
    
     
      for (var i = 0; i < input.length; i++){
        if(data === input[i].getAttribute("id")){
          localStorage.setItem(data, input[i].value);
        }
      }
     //store data in local storage
    })
    for (vari = 0; i < input.length; i++) {
      if (data ===input[i].getAttribute("id")) {
        localStorage.getItem("input");
      }
    }
    });

//color code columns based on past, present, future time
function color(time) {
  let i = updateTime;
  let timeBlock = hours;
 
if (timeBlock < i) {
  return "future";
} else if (timeBlock > i){
  return "past";
}else (timeBlock === i) 
  return "present";
}
 
//scroll down feature

